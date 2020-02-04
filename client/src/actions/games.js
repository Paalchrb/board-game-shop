import {
    GET_ALL_GAMES,
    GET_ALL_GAMES_ERROR,
    GET_GAME_DETAILS,
    GAME_DETAILS_ERROR,
    GET_GAMES_BY_NAME,
    GET_GAMES_BY_NAME_ERROR,
    GET_GAMES_BY_CATEGORIES,
    GET_GAMES_BY_CATEGORIES_ERROR
} from './constants';
import { searchGames, searchGamesByName, searchGamesByCategories } from '../services/sessions'


export const getAllGames = (orderBy, page) => async dispatch => {
    console.log(orderBy, page)
    try{
        const games = await searchGames(orderBy, page);
        dispatch({
            type: GET_ALL_GAMES,
            payload: games
        })
    } catch(error) {
        dispatch({ 
            type: GET_ALL_GAMES_ERROR,
            payload: error,
         })
    }
} 

export const getGameDetails = (id) => dispatch => {
    try {
        dispatch({
            type: GET_GAME_DETAILS,
            payload: id
        });
    } catch(error) {
        dispatch({
            type: GAME_DETAILS_ERROR,
            payload: error
        });
    }
}

export const getGamesByName = text => async dispatch => {
    try {
        const games = await searchGamesByName(text);
        dispatch({
            type: GET_GAMES_BY_NAME,
            payload: games.games
        })
    } catch (error) {
        dispatch({
            type: GET_GAMES_BY_NAME_ERROR,
            payload: error
        })
    }
}

export const getGamesByCategories = (categories, minPlayers, maxPlayers) => async dispatch => {
    try {
        const games = await searchGamesByCategories(categories, minPlayers, maxPlayers);
        dispatch({
            type: GET_GAMES_BY_CATEGORIES,
            payload: games
        })
    } catch(error) {
        dispatch({
            type: GET_GAMES_BY_CATEGORIES_ERROR,
            payload: error
        })
    }
}