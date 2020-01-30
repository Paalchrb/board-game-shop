const API_URL = 'https://www.boardgameatlas.com/api';
const client_id = 'SB1VGnDv7M'
const limit = 32

export async function searchGames( orderBy, page ) {
    const response = await fetch(`${API_URL}/search?limit=${limit}&skip=${page*limit}&order_by=${orderBy}&ascending=false&pretty=true&client_id=${client_id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    const { games } = await response.json()
    return games;
}

export async function getGameById(id) {
    const response = await fetch(`${API_URL}/search?ids=${id}&client_id=${client_id}`, {
        method: 'GET'
    });
    const parsedResponse = await response.json();
    const game = parsedResponse.games[0];
    return game;
}

export async function getCategories() {
    const response = await fetch(`${API_URL}/game/categories?client_id=${client_id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    const categories = await response.json()
    return categories.categories;
}

export async function searchGamesByName(text,) {
    const response = await fetch(`${API_URL}/search?name=${text}&fuzzy_match=true&client_id=${client_id}`, {
        method: 'GET'
    });
    const games = await response.json()
    return games;
}