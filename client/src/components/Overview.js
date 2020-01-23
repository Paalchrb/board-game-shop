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
import Grid from '@material-ui/core/Grid'



class Overview extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            games: [],
            loading: false,
            error: null
        }
    }

    componentDidMount = async () => {
        this.setState({ loading: true })
        await this.populateGames({ orderBy: 'popularity' })
    }

    async populateGames(orderBy) {
        const games = await searchGames({ orderBy });
        this.setState({ 
            games,
            loading: false 
        });
        console.log(games.length)
    }

    handleClick(event, id) {
        const { history } = this.props;
        history.push(`details/${id}`);
    }

    render() {
        const { games, error, loading } = this.state;

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
                        
                        onClick={event => this.handleClick(event, game.id)}
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
                    <Grid container spacing={3} className="overviewGridContainer">
                        {gameNames}
                    </Grid>
                ) : (
                    <p>No games available games at the moment</p>
                )
                }
            </div>

        )
    }
}

export default Overview;