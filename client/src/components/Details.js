import React, { Component, Fragment } from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Spinner from './Spinner';
import { getGameDetails, getAllGames } from '../actions/games';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Details extends Component {
  async componentDidMount() {
    if (this.props.games.games.length === 0) {
      const { getAllGames } = this.props
      await getAllGames({ orderBy: 'popularity' });
    } 
    const { id } = this.props.match.params;
    const { getGameDetails } = this.props;
    getGameDetails(id);
  }

  render() {
    if(!this.props.games.chosenGame) {
      return (
        <Fragment>
            <h3>Something went wrong!</h3>
        </Fragment>
      )
    }

    const {
      chosenGame: {
        name, 
        year_published, 
        min_players, 
        max_players, 
        description,
        image_url  
      },
      loading,
      error
    } = this.props.games;

    if(error) {
      return (
        <Fragment>
            <h3>Something went wrong!</h3>
        </Fragment>
      )
    }

    if(loading) {
      return (
        <Fragment>
            <Spinner />
        </Fragment>
      )
    }

    return (
      <div className='details-container'>
        <Typography variant='h2'> {name}</Typography>
        <Grid 
          container 
          spacing={2} 
          justify='space-around'
          className='details-margin-grid'
        >
          <Grid 
            item container spacing={2} xs={12} md={6} className='details-left-grid'> 
            <Grid item xs={12}>
              <img src={image_url} alt='codename game' /> 
            </Grid>
            <Grid item xs={12}>
             <Typography variant='body1'> 
                <span className='bold'>Publication year:</span> {year_published}
              </Typography>
            </Grid>
          </Grid>
          <Grid 
            item 
            container 
            spacing={2}
            xs={12} 
            md={6} 
            className='details-right-grid'
            direction='column'
          > 
           <Typography variant='h5'>Details:</Typography>
           <Typography variant='body1'> 
              <span className='bold'>Players</span> {min_players} - {max_players}
            </Typography>
           <Typography variant='body1'> 
              <span className='bold'>Description:</span> {description}
            </Typography>
          </Grid>
        </Grid>
      </div>
    );
  }
}

Details.propTypes = {
  games: PropTypes.object.isRequired,
  getGameDetails: PropTypes.func.isRequired,
  getAllGames: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  games: state.games
})

const mapDispatchToProps = {
  getGameDetails,
  getAllGames
}

export default connect(mapStateToProps, mapDispatchToProps)(Details);
