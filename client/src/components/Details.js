import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';
import {Badge} from '@material-ui/core'
import { getGameDetails, getGamesByFilter } from '../actions/games';
import { setLoader, stopLoader } from '../actions/loading';
import { addToCart } from '../actions/shopcart';
import { getAllCategories } from '../actions/categories';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
var currencyFormatter = require('currency-formatter');

class Details extends Component {
  constructor(props) {
    super(props);

    this.state = {
      relatedGames: [],
      error: null
    }
  }

  async componentDidMount() {
    try{
      const { getAllCategories, getGamesByFilter, getGameDetails, setLoader, stopLoader } = this.props;
      await setLoader()
      await getAllCategories();
      const chosenGame = await getGameDetails(this.props.match.params.id);
      const chosenGameCategories = await chosenGame.categories.map(id => id.id)
      const catStr = await chosenGameCategories[0]
      const relatedGames = await getGamesByFilter(catStr)
      this.setState({relatedGames})
      await stopLoader();
    } catch (error) {
      this.setState({error})
    }
  }

  async componentDidUpdate (prevProp, prevState) {
    const { getGameDetails, stopLoader } = this.props
    
    if(this.props.match.params.id !== prevProp.match.params.id) {
      await getGameDetails(this.props.match.params.id);
      stopLoader()
    } 
  }

  async handleCartClick(id) {
    const { addToCart } = this.props;
    await addToCart(id);
  }

  async handleDetailsClick(event, id) {
    const { history, getGameDetails, setLoader } = this.props;
    setLoader()
    const chosenGame = await getGameDetails(id);
    this.setState({chosenGame})
    history.push(`/details/${id}`);
  }

  render() {
    if(!this.props.games.chosenGame.name) {
      return (
        <Fragment>
            <h3>Something went wrong!</h3>
        </Fragment>
      )
    }
    
    const {
      relatedGames,
      error
    } = this.state;

    const {
      chosenGame: {
        id,
        name, 
        min_players, 
        max_players,
        min_playtime,
        max_playtime,
        min_age,
        categories, 
        description_preview,
        images: {medium},
        price,
        discount,
        primary_publisher,
        average_user_rating,
        rules_url
      } 
    } = this.props.games
    
    const { loading } = this.props;
    const allCategories = this.props.categories.categories;
    
    
    if(error) {
      return (
        <Fragment>
            <h3>{error.message}</h3>
        </Fragment>
      )
    }

    if(loading) {
      return(
        <div className="details-container">
          <Skeleton className="title" height="70px" width="300px" />
          <Skeleton className="img" height='90%' width="300px" margin="0" />
          <Skeleton className="VIPDetails" />
          <Skeleton className="add-to-cart-btn" height="40px" />
          <Skeleton className="description" height="400px" />
          <Skeleton className="price" width="80px" />
          <Skeleton className="extra-details" />
        </div>
      )
    }

    const categoryNames = categories.map(category => {
      return allCategories.find(categoryObj => categoryObj.id === category.id);
    }).filter(cat => cat)

  
    const otherGames = relatedGames.filter(game => game.id !== id).map(game => {
      return (
        <Card
          className='game-card'
          key={game.id}
        >
          <CardActionArea 
              className="gameOverview"
              onClick={event => this.handleDetailsClick(event, game.id)}
          >
            <img src={game.images.small} alt={game.name}/>
            <Typography gutterBottom variant="h6" component="h2">{game.name}</Typography>
            <Typography variant="body2" component="p" className="price">{currencyFormatter.format((game.price*9.18).toFixed(0), {precision: 0, thousand: '.', code: 'NOK'})}</Typography>
          </CardActionArea>
          <Button 
              variant="contained" 
              color='primary' 
              className='add-to-cart-btn'
              onClick={() => this.handleCartClick(game.id)}
          > 
          <ShoppingCartIcon />
            Legg i kurv
          </Button>
        </Card>
      )
    }).slice(0, 10)

    return (
      <Fragment>
          
          <Link to="/" id="home"><Typography variant="overline">Home</Typography></Link>
          <Link to="/overview" id="overview"><Typography variant="overline">Game Overview</Typography></Link>
        
      <div className='details-container'>
        <Typography variant="h3" className="title">{name}</Typography>
        <img src={medium} className="img" alt={name}/>
        <ul className="VIPDetails">
          <li><Typography variant="body1" className="bold">Players:</Typography> { min_players ? min_players + '-' + max_players : 'Unknown'}</li>
          <li><Typography variant="body1" className="bold"> Categories:</Typography> 
            {' ' + categoryNames.map(category => category.name).join(', ')}
          </li>
          <li><Typography variant="body1" className="bold">Playtime:</Typography> { min_playtime ? min_playtime + '-' + max_playtime : 'Unknown'} min.</li>
          <li><Typography variant="body1" className="bold">Minimum age:</Typography> { min_age ? min_age : 'Unknown' }</li>
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
        <Typography variant="body1" className="description">{description_preview}</Typography>
        <Typography variant="h6" className="price">{discount > 0.3 ? (
            <Fragment>
              <span className="originalPrice">{currencyFormatter.format((price*9.18).toFixed(0), {precision: 0, thousand: '.', code: 'NOK'}) }</span> 
              <span className="salePrice-details">{currencyFormatter.format(((price*(1-discount))*9.18).toFixed(0), {precision: 0, thousand: '.', code: 'NOK'})}</span>
              <Badge className="sale" badgeContent={(discount*100).toFixed(0) + '%'} color="secondary" />
            </Fragment>
        ) : (
            <span>{currencyFormatter.format((price*9.18).toFixed(0), {precision: 0, thousand: '.', code: 'NOK'}) }</span>
            )
        }
        </Typography>
        <ul className="extra-details">
          <li><Typography variant="body1" className="bold">Publisher:</Typography> {primary_publisher}</li>
          <li><Typography variant="body1" className="bold">Rating:</Typography> {average_user_rating ? (average_user_rating).toFixed(1) : 0}</li>
          <li><Typography variant="body1"><a href={rules_url} target="blank">{rules_url ? 'Rules' : 'No rules found'}</a></Typography></li>
        </ul>
        
      </div>
      <Typography variant="h4" component="h4" id="related-title">Related games:</Typography>
      <div className="relatedGames">
        {otherGames}
      </div>
    </Fragment>
    );
  }
}

Details.propTypes = {
  games: PropTypes.object.isRequired,
  getGameDetails: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
  getGamesByFilter: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  games: state.games,
  categories: state.categories,
  loading: state.loading.isLoading
})

const mapDispatchToProps = {
  getGameDetails,
  getAllCategories,
  addToCart,
  getGamesByFilter,
  setLoader,
  stopLoader
}

export default connect(mapStateToProps, mapDispatchToProps)(Details);
