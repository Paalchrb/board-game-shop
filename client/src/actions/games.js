import {
    GET_GAME_DETAILS,
    GAME_DETAILS_ERROR,
    GET_GAMES_BY_CATEGORIES,
    GET_GAMES_BY_CATEGORIES_ERROR
} from './constants';
import { searchGamesByFilter, getGameById } from '../services/sessions'

export const getGameDetails = (id) => async dispatch => {
    try {
        const game = await getGameById(id)
        dispatch({
            type: GET_GAME_DETAILS,
            payload: game
        });
        return game;
    } catch(error) {
        dispatch({
            type: GAME_DETAILS_ERROR,
            payload: error
        });
    }
}

export const getGamesByFilter = (categories='', search='', minPlayers=1, maxPlayers=6, page=0) => async dispatch => {
    try {
        const games = await searchGamesByFilter(categories, search, minPlayers, maxPlayers, page);
        dispatch({
            type: GET_GAMES_BY_CATEGORIES,
            payload: games
        })
        return games
    } catch(error) {
        dispatch({
            type: GET_GAMES_BY_CATEGORIES_ERROR,
            payload: error
        })
    }
}