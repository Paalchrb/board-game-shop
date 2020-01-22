const API_URL = 'https://www.boardgameatlas.com/api';

export async function searchGames({ orderBy }) {
    const response = await fetch(`${API_URL}/search?order_by=${orderBy}&ascending=false&pretty=true&client_id=SB1VGnDv7M`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    const { games } = await response.json()
    return games;
}

export async function getGameById(id) {
    const response = await fetch(`${API_URL}/search?ids=${id}&client_id=SB1VGnDv7M`, {
        method: 'GET'
    });
    const parsedResponse = await response.json();
    const game = parsedResponse.games[0];
    return game;
}