import React, { Fragment } from 'react';
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
import { getAllGames, getGamesByCategories } from '../actions/games';
import { setLoader, stopLoader } from '../actions/loading'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';
var currencyFormatter = require('currency-formatter');


class Overview extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showScrollButton: 'hideScrollButton',
            page: 0,
            maxPages: 478,
            orderBy: 'popularity',
            discountPrice: 'noOverline'
        }
    }

    async componentDidMount () {
        const { getAllGames, setLoader, stopLoader } = this.props;
        const { page } = this.state;
        await setLoader()
        await getAllGames('popularity', page);
        await stopLoader();
        window.addEventListener('scroll', this.handleScroll.bind(this))
    }

    componentWillUnmount() {
        this.setState({showScrollButton: 'hideScrollButton'});
        window.removeEventListener('scroll', this.handleScroll.bind(this));
    }

    
    handleDetailsClick(id) {
        const { history } = this.props;
        history.push(`details/${id}`);
    }

    handleScrollTopClick () {
            return window.scrollTo({
                top: 0,
                behavior: 'smooth',
                block: 'center'
            })
    }

    handleScroll() {
        const scroll = window.scrollY;
        if(scroll>540) {
            this.setState({showScrollButton: 'showScrollButton'})
        } else if(scroll <= 539) {
            this.setState({showScrollButton: 'hideScrollButton'})
        }
    }

    topOfPage() {
        return window.scrollTo({
            top: 0
        })
    }

    async handleCartClick(id) {
        const { addToCart } = this.props;
        await addToCart(id);
    }

    handleChangePage = async (value, event) => {
        event.preventDefault()
        const { page, orderBy } = this.state;
        const newState = page+value;
        if(newState < 0) {
          this.setState({page: 0})
        } else {
          this.setState({page: (page+value)})
        }
        const { getAllGames, setLoader, stopLoader } = this.props;
        this.topOfPage()
        await setLoader()
        await getAllGames(orderBy, this.state.page);
        await stopLoader();
      }

    //   handleFilterChange = async (event) => {
    //     const filterProp = event.target.value;
    //     const { page } = this.state;
    //     if(filterProp === '') {
    //         this.setState({orderBy: 'popularity'})
    //     } else {
    //         this.setState({orderBy: filterProp})
    //     }
    //   }

    render() {
        const { showScrollButton, page, maxPages } = this.state;
        const { games, error } = this.props.games;
        const { loading } = this.props;
        if(!games) {
            return(
                <div>
                 No games found
                 </div>
            );
        }
        if (error) {
            return (
                <Fragment>
                    <h3>Something went wrong!</h3>
                </Fragment>
            )
        }

        if(loading) {
            
            const Skeletons = Array.from(new Array(30)).map((element, index) => {
                return(
                    <Grid item xs={12} sm={6} md={3} lg={3} className="overviewGrid" key={index}>
                        <Card className='skeleton-card'>
                            <Skeleton className='skeleton-image' variant="rect" />   
                            <Skeleton className='skeleton-text' width='83%' />
                            <Skeleton className='skeleton-text' width='38%' />
                            <Skeleton className='skeleton-button' variant='rect' />
                        </Card>
                    </Grid>
                )    
        }) 
        return(
            <Grid container spacing={3} className="overviewGridContainer">
                {Skeletons}
            </Grid>
        )
        }
       
        const gameNames = games.map((game, index) => {
            return (
                <Grid item xs={12} sm={6} md={3} lg={3} className="overviewGrid" key={index}>
                        <Card
                            className='game-card'
                        >
                            <CardActionArea 
                                className="gameOverview"
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
                </Grid>
            );
        });
        
        return(
            <div>
                <Fragment>
                    {/* <div>
                        <select onChange={this.handleFilterChange.bind(this)}>
                            <option value="">Filtrer med:</option>
                            <option value="name">Navn</option>
                        </select>
                    </div> */}
                    <Grid container spacing={3} className="overviewGridContainer">
                        {gameNames}
                    </Grid>
                    
                    <Fab 
                        color="secondary" 
                        className={showScrollButton} 
                        onClick={this.handleScrollTopClick.bind(this)} 
                        size="small" 
                        aria-label="scroll back to top"
                    >
                        <KeyboardArrowUpIcon />
                    </Fab>
                </Fragment>
                <div className="pagenation">
                    <button onClick={this.handleChangePage.bind(this, (-1))}>
                        <ArrowBackIos />
                    </button>
                    <Typography variant="body2">Page {page +1}</Typography>
                    <button onClick={this.handleChangePage.bind(this, 1)}>
                    <ArrowForwardIos  />
                    </button>
                </div>
            </div>

        )
    }
}

Overview.propTypes = {
    games: PropTypes.object.isRequired,
    getAllGames: PropTypes.func.isRequired,
    setLoader: PropTypes.func.isRequired,
    stopLoader: PropTypes.func.isRequired,
    addToCart: PropTypes.func.isRequired,
    
    
}

function mapStateToProps(state) {
    return {
        games: state.games,
        loading: state.loading.isLoading,
    }
}

const mapDispatchToProps = {
    getAllGames,
    setLoader, 
    stopLoader,
    addToCart,
    getGamesByCategories
} 

export default connect(mapStateToProps, mapDispatchToProps)(Overview);