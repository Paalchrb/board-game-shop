import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import { getGameDetails } from '../actions/games'


class LandingPage extends Component {
  static propTypes = {
    getGameDetails: PropTypes.func.isRequired, 
  }

  constructor(props) {
    super(props)

    this.state = {
      gameImage: ''
    }
  }

  async componentDidMount() {
    const { getGameDetails } = this.props;
    const response = await getGameDetails('mce5HZPnF5');
    const gameImage = response.images.medium;
    this.setState({
      gameImage
    });
  }

  render() {
    return (
      <div className='landing-container'>
        <img src={this.state.gameImage} alt='board game legacy' className='landing-image' />
        <div>
          <Typography variant="h2">WELCOME TO BOARDGAMES</Typography>
          <Typography variant="h5" className=''>
            Boardgames is one of the largest portals for browsing and buying board games in the world. Start browsing from more than 10.000 games and find your new favorite game!
          </Typography>

        </div>
      </div>
    )
  }
}

const mapDispatchToProps = {
  getGameDetails
};

export default connect(null, mapDispatchToProps)(LandingPage);
