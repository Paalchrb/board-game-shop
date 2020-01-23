import React, { Component, Fragment } from 'react'
import { getGameById } from '../services/sessions';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Spinner from './Spinner';

class Details extends Component {
  constructor(props) {
    super(props);

    this.state = {
      game: {},
      loading: false,
      error: null
    }
  }

  async componentDidMount() {
    this.setState({ loading: true });
    await this.fetchGame();
  }

  async fetchGame() {
    const { id } = this.props.match.params;
    const game = await getGameById(id);
    this.setState({ 
      game,
      loading: false
    });
    console.log(game);
  }

  render() {
    const {
      game: {
        name, 
        year_published, 
        min_players, 
        max_players, 
        description,
        image_url  
      },
      loading,
      error
    } = this.state;

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
          <Grid item container spacing={2} xs={12} md={6} className='details-left-grid'> 
            <Grid item xs={12}>
              <img src={image_url} alt='codename game' /> 
            </Grid>
            <Grid item xs={12}>
            <Typography variant='h6'> Published: {year_published}</Typography>
            </Grid>
          </Grid>
          <Grid item container spacing={2}xs={12} md={6} className='details-right-grid'> 
           
          </Grid>
          
          <h3>Published: {year_published}</h3>
          <h4>Minimum players: {min_players}</h4>
          <h4>Maximum players: {max_players}</h4>
          <p>{description}</p>
        </Grid>
      </div>
    );
  }
}

export default Details;
