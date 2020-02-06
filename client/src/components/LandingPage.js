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
        <Typography variant="h2">WELCOME TO BOARDGAMES-HEAVEN-DELUXE-SHOP</Typography>
      </div>
    )
  }
}

const mapDispatchToProps = {
  getGameDetails
};

export default connect(null, mapDispatchToProps)(LandingPage);
