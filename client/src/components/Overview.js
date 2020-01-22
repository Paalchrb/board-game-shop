import React from 'react';
import {searchGames} from '../services/sessions'

class Overview extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            games: []
        }
    }

    componentDidMount = async () => {
        await this.populateGames({ orderBy: 'popularity' })
    }

    async populateGames(orderBy) {
        const games = await searchGames({ orderBy });
        this.setState({games})
    }

    render() {
        const { games } = this.state;

        const gameNames = games.map(game => {
            return (
                <li key={game.id}>
                    <img src={game.images.small} />
                    <h2>{game.name}</h2>
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