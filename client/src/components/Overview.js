import React from 'react';
import {searchGames} from '../services/sessions'
import { makeStyles } from '@material-ui/core/styles';
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
            isLoading: false,
            error: null
        }
    }

    componentDidMount = async () => {
        await this.populateGames({ orderBy: 'popularity' })
    }

    async populateGames(orderBy) {
        const games = await searchGames({ orderBy });
        this.setState({games})
        console.log(games.length)
    }

    

    render() {
        const { games } = this.state;

        const gameNames = games.map(game => {
            return (
                <li key={game.id}>
                    <Card>
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
            )
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