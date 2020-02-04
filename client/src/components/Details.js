import React, { Component, Fragment } from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Spinner from './Spinner';
import { getGameDetails, getAllGames } from '../actions/games';
import { addToCart } from '../actions/shopcart';
import { getAllCategories } from '../actions/categories';
import { getGameById } from '../services/sessions'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

class Details extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chosenGame: {},
      error: null
    }
  }
  async componentDidMount() {
    try{
      const { getAllCategories } = this.props;
      await getAllCategories();
      const chosenGame = await getGameById(this.props.match.params.id );
      this.setState({chosenGame})
      console.log(chosenGame)
    } catch (error) {
      this.setState({error})
    }
    
  }

  async handleCartClick(id) {
    const { addToCart } = this.props;
    const cartItem = await addToCart(id);
}

  render() {
    if(!this.state.chosenGame.name) {
      return (
        <Fragment>
            <h3>Something went wrong!</h3>
        </Fragment>
      )
    }
    
    const {
      chosenGame: {
        id,
        name, 
        year_published, 
        min_players, 
        max_players,
        min_playtime,
        max_playtime,
        min_age,
        categories, 
        description_preview,
        image_url,
        images: {medium},
        price,
        primary_publisher,
        average_user_rating,
        rules_url
      },
      loading,
      error
    } = this.state;

    const allCategories = this.props.categories.categories;
    

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
    const categoryNames = categories.map(category => {
      return allCategories.find(categoryObj => categoryObj.id == category.id);
    })
    
    console.log(categoryNames);
    return (
      <div className='details-container'>
        <Typography variant="h3" className="title">{name}</Typography>
        <img src={medium} />
        <ul className="VIPDetails">
          <li>Players: { min_players ? min_players + '-' + max_players : 'Unknown'}</li>
          <li> Categories: 
            {' ' + categoryNames.map(category => category.name).join(', ')}
          </li>
          <li>Playtime: { min_playtime ? min_playtime + '-' + max_playtime : 'Unknown'} min.</li>
          <li>Minimum age: { min_age ? min_age : 'Unknown' }</li>
        </ul>
        <Button 
          variant="contained" 
          color='primary' 
          className='add-to-cart-btn'
          onClick={() => this.handleCartClick(id)}
        >
          
          <ShoppingCartIcon />
          Legg i kurv
        </Button>
        <Typography variant="p" className="description">{description_preview}</Typography>
        <p className="price">Price: {price}</p>
        <ul className="extra-details">
          <li>Publisher: {primary_publisher}</li>
          <li>Rating: {(average_user_rating).toFixed(1)}</li>
          <li><a href={rules_url} target="blank">Rules</a></li>
        </ul>
      </div>
    );
  }
}

Details.propTypes = {
  games: PropTypes.object.isRequired,
  getGameDetails: PropTypes.func.isRequired,
  getAllGames: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  games: state.games,
  categories: state.categories
})

const mapDispatchToProps = {
  getGameDetails,
  getAllGames,
  getAllCategories,
  addToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Details);
