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
import { getGamesByFilter } from '../actions/games';
import { setLoader, stopLoader } from '../actions/loading';
import { setPage } from '../actions/categories';
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
            discountPrice: 'noOverline'
        }
    }

    async componentDidMount () {
        const { 
            setLoader, 
            stopLoader, 
            getGamesByFilter ,
            searchText,
            categories: { players, page }
        } = this.props;
        await setLoader()
        const chosenCats = JSON.parse(localStorage.getItem('checked-cats')) || [];
        await getGamesByFilter(chosenCats.join(','), searchText, players[0], players[1], page);
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
        const { categories: { page }, setPage } = this.props;
        const newState = page+value;
        if(newState < 0) {
          setPage(0);
        } else {
          setPage(page+value);
        }
        const { getGamesByFilter, setLoader, stopLoader, searchText } = this.props;
        this.topOfPage()
        await setLoader()
        let chosenCats = JSON.parse(localStorage.getItem('checked-cats')) || '';
        if(chosenCats) {
            chosenCats = chosenCats.join(',');
        }
        const search = searchText || undefined;
        await getGamesByFilter(chosenCats, search, undefined, undefined, newState);
        await stopLoader();
      }

    render() {
        const { showScrollButton } = this.state;
        const { games, error } = this.props.games;
        const { loading, categories: { page } } = this.props;
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
                                Add to cart
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
                    {
                    page !== 0 && (
                    <button onClick={this.handleChangePage.bind(this, (-1))}>
                        <ArrowBackIos />
                    </button>
                    )
                    }
                    <Typography variant="body2">Page {page +1}</Typography>
                    {
                    games.length === 32 && (
                    <button onClick={this.handleChangePage.bind(this, 1)}>
                        <ArrowForwardIos  />
                    </button>
                    )
                    }
                </div>
            </div>

        )
    }
}

Overview.propTypes = {
    games: PropTypes.object.isRequired,
    categories: PropTypes.object.isRequired,
    searchText: PropTypes.string.isRequired,
    getGamesByFilter: PropTypes.func.isRequired,
    setLoader: PropTypes.func.isRequired,
    stopLoader: PropTypes.func.isRequired,
    addToCart: PropTypes.func.isRequired,
    setPage: PropTypes.func.isRequired,
    
    
}

function mapStateToProps(state) {
    return {
        games: state.games,
        loading: state.loading.isLoading,
        searchText: state.search.searchText,
        categories: state.categories,
    }
}

const mapDispatchToProps = {
    setLoader, 
    stopLoader,
    addToCart,
    getGamesByFilter,
    setPage
} 

export default connect(mapStateToProps, mapDispatchToProps)(Overview);