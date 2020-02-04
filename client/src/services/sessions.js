import { validCats } from './validCategories';
const API_URL = 'https://www.boardgameatlas.com/api';
const client_id = 'SB1VGnDv7M'
const limit = 32
const minPrice = 0.01


export async function searchGames( orderBy, page ) {
    console.log(orderBy)
    const response = await fetch(`${API_URL}/search/?limit=${limit}&skip=${page*limit}&ascending=false&order_by=${orderBy}&gt_price=${minPrice}&client_id=${client_id}`, {
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
   /*  const filteredCats = categories.categories.filter(cat => validCats.includes(cat.id));
    return filteredCats; */
    return categories.categories;
}

export async function searchGamesByName(text,) {
    const response = await fetch(`${API_URL}/search?name=${text}&fuzzy_match=true&client_id=${client_id}&gt_price=${minPrice}`, {
        method: 'GET'
    });
    const games = await response.json()
    return games;
}

export async function searchGamesByCategories(categories, minPlayers, maxPlayers) {
    if(minPlayers === undefined) {
        minPlayers = 1
    }

    if(minPlayers === 4) {
        maxPlayers = 6
    }
    console.log(minPlayers, maxPlayers)
    const response = await fetch(`${API_URL}/search?categories=${categories}&gt_min_players=${minPlayers-1}&order_by=popularity&&client_id=${client_id}&gt_price=${minPrice}`, {
        method: 'GET'
    });
    console.log(minPlayers, maxPlayers)
    const { games } = await response.json()
    return games;
}