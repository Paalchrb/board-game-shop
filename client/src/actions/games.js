import {
    GET_ALL_GAMES,
    GET_ALL_GAMES_ERROR
} from './constants';
import {searchGames} from '../services/sessions'



export const getAllGames = (orderBy) => async dispatch => {
    try{
        const games = await searchGames(orderBy);
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