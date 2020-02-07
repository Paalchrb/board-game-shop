import React, { Fragment, Component } from 'react';
import Card from '@material-ui/core/Card';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import Badge from '@material-ui/core/Badge';
import Skeleton from '@material-ui/lab/Skeleton';
import { addToCart } from '../actions/shopcart';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { getAllGames, getGamesByCategories, getGameDetails } from '../actions/games';
import { setLoader, stopLoader } from '../actions/loading'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';
var currencyFormatter = require('currency-formatter');


class LandingPage extends Component {
  static propTypes = {
    getGameDetails: PropTypes.func.isRequired, 
  }

  constructor(props) {
    super(props)

    this.state = {
      gameImage: '',
      startSlide: 0,
      endSlide: 5
    }
  }

  async componentDidMount() {
    const { getGameDetails, getAllGames } = this.props;
    const response = await getGameDetails('mce5HZPnF5');
    await getAllGames('popularity', 0)
    const gameImage = response.images.medium;
    this.setState({
      gameImage
    });
    console.log(this.props)
  }

  handleOverviewClick () {
    const { history } = this.props;
    
    history.push('/overview')
  }

  handleForwardClick () {
    const { startSlide, endSlide } = this.state;
    console.log(startSlide, endSlide)
    if(endSlide > 30) {
      this.setState({
        startSlide: 0,
        endSlide: 5
      })
    } else {
      this.setState({
        startSlide: startSlide + 5,
        endSlide: endSlide+5
      })
    }
    
  }

  handleBackwardClick () {
    const { startSlide, endSlide } = this.state;
    console.log(startSlide, endSlide)
    if(startSlide === 0) {
      this.setState({
        startSlide: 0,
        endSlide: 5
      })
    } else {
      this.setState({
        startSlide: startSlide - 5,
        endSlide: endSlide - 5
      })
    }
    
  }

  render() {
    const { startSlide, endSlide } = this.state;
    const { games } = this.props.games;
    console.log(games.length)
    const popGames = games.map((game, index) => {
      return (
        <Card
            className='game-card'>
            <CardActionArea 
                className="game-landing"
                onClick={ () => this.handleDetailsClick(game.id)}
              >
                <CardMedia
                    image={game.images.small}
                    title={game.name}
                />
                <img src={game.images.small} alt={game.name} />
                <Typography gutterBottom variant="h6" component="h2">{game.name}</Typography>
                <Typography variant="body2" component="p" className="price">
                    {game.discount > 0.3 ? (
                        <Fragment>
                        <span className="originalPrice">{currencyFormatter.format((game.price*9.18).toFixed(0), {precision: 0, thousand: '.', code: 'NOK'}) }</span> 
                        <span className="salePrice">{currencyFormatter.format(((game.price*(1-game.discount))*9.18).toFixed(0), {precision: 0, thousand: '.', code: 'NOK'})}</span>
                        <Badge className="sale" badgeContent={(game.discount*100).toFixed(0) + '%'} color="secondary" />
                        </Fragment>
                    ) : (
                        <span>{currencyFormatter.format((game.price*9.18).toFixed(0), {precision: 0, thousand: '.', code: 'NOK'}) }</span>
                        )
                    }
                    </Typography>
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
    } ).slice(startSlide, endSlide)
    return (
      <div className='landing-container'>
        <img src={this.state.gameImage} alt='board game legacy' className='landing-image' />
        <div className="landing-text">
          <Typography variant="h2">WELCOME TO BOARDGAMES</Typography>
          <Typography variant="h5" className='landing-text'>
            Boardgames is one of the largest portals for browsing and buying board games in the world. Start browsing from more than 10.000 games and find your new favorite game!
          </Typography>
          <Button className="btn landing-btn" onClick={this.handleOverviewClick.bind(this)}>See all games</Button>
        </div>
        <div className="landing-popGames">
          <ArrowBackIos onClick={this.handleBackwardClick.bind(this)}/>
          {popGames}
          <ArrowForwardIos onClick={this.handleForwardClick.bind(this)}/>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
      games: state.games,
      loading: state.loading.isLoading,
  }
}
const mapDispatchToProps = {
  getGameDetails,
  getAllGames
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
