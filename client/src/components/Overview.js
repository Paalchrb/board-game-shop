import React, { Fragment } from 'react';
import { searchGames } from '../services/sessions';
import { makeStyles } from '@material-ui/core/styles';
import Spinner from './Spinner';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { getAllGames } from '../actions/games';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'



class Overview extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showScrollButton: 'hideScrollButton',
        }
    }

    componentDidMount = async () => {
        const { getAllGames } = this.props;
        await getAllGames({ orderBy: 'popularity' });
        window.addEventListener('scroll', this.handleScroll.bind(this))
    }

    handleDetailsClick(event, id) {
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
       } else {
           this.setState({showScrollButton: 'hideScrollButton'})
       }
   }

  

    

    render() {
        const {showScrollButton} = this.state;
        const { games, error, loading } = this.props.games;

        if (error) {
            return (
                <Fragment>
                    <h3>Something went wrong!</h3>
                </Fragment>
            )
        }

        if (loading) {
            return (
                <Fragment>
                    <Spinner />
                </Fragment>
            )
        }

        const gameNames = games.map(game => {
            return (
                <Grid item xs={6} sm={6} md={3} lg={2} className="overviewGrid" key={game.id}>
                    <Card
                        onClick={event => this.handleDetailsClick(event, game.id)}
                    >
                        <CardActionArea className="gameOverview">
                            <CardMedia
                                
                                image={game.images.small}
                                title={game.name}
                            />
                    <img src={game.images.small} />
                    <Typography gutterBottom variant="h6" component="h2">{game.name}</Typography>
                    <Typography variant="body2" component="p" className="price">{(game.price*9.18).toFixed(0)} NOK</Typography>
                    </CardActionArea>
                    </Card>
                </Grid>
            );
        });
        return(
            <div>
                {games.length ? (
                    <Fragment>
                    <Grid container spacing={3} className="overviewGridContainer">
                        {gameNames}
                        
                    </Grid>
                    
                        <Fab color="secondary" className={showScrollButton} onClick={this.handleScrollTopClick.bind(this)} size="small" aria-label="scroll back to top">
                        <KeyboardArrowUpIcon />
                        </Fab>
                    </Fragment>
                ) : (
                    <p>No games available games at the moment</p>
                )
                }
            </div>

        )
    }
}

Overview.propTypes = {
    games: PropTypes.object.isRequired,
    getAllGames: PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return {
        games: state.games,
    }
}

const mapDispatchToProps = {getAllGames} 

export default connect(mapStateToProps, mapDispatchToProps)(Overview);