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
                <li key={game.id}>
                    <Card
                        onClick={event => this.handleClick(event, game.id)}
                    >
                        <CardActionArea>
                            <CardMedia
                                image={game.images.small}
                                title={game.name}
                            />
                    <img src={game.images.small} />
                    <h2>{game.name}</h2>
                    <p>{(game.price*9.18).toFixed(0)} NOK</p>
                    </CardActionArea>
                    </Card>
                </li>
            );
        });
        return(
            <div>
                {games.length ? (
                    <ul>
                        {gameNames}
                    </ul>
                ) : (
                    <p>No games available games at the moment</p>
                )
                }
            </div>

        )
    }
}

export default Overview;