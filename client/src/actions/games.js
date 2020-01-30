import {
    GET_ALL_GAMES,
    GET_ALL_GAMES_ERROR,
    GET_GAME_DETAILS,
    GAME_DETAILS_ERROR
} from './constants';
import { searchGames } from '../services/sessions'


export const getAllGames = (orderBy, page) => async dispatch => {
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