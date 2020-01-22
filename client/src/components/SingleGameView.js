import React, { Component, Fragment } from 'react'
import { getGameById } from '../services/sessions';
import Spinner from './Spinner';

class SingleGameView extends Component {
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
      <div className='single-view-container'>
        <h1>{name}</h1>
        <img src={image_url} alt='codename game' />
        <h3>Published: {year_published}</h3>
        <h4>Minimum players: {min_players}</h4>
        <h4>Maximum players: {max_players}</h4>
        <p>{description}</p>
      </div>
    )
  }
}

export default SingleGameView;
