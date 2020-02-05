import {
    GET_ALL_GAMES,
    GET_ALL_GAMES_ERROR,
    GET_GAME_DETAILS,
    GAME_DETAILS_ERROR,
    GET_GAMES_BY_NAME_ERROR,
    GET_GAMES_BY_NAME,
    GET_GAMES_BY_CATEGORIES,
    GET_GAMES_BY_CATEGORIES_ERROR,
} from '../actions/constants';

const initialState = {
    games: [],
    chosenGame: {},
    error: null,
}

export default function(state=initialState, action) {
    const { type, payload } = action;
    switch(type) {
        case GET_ALL_GAMES: 
        case GET_GAMES_BY_NAME:
            return {
                ...state, 
                games: payload,  
            }
        case GET_ALL_GAMES_ERROR:
        case GAME_DETAILS_ERROR:
        case GET_GAMES_BY_NAME_ERROR:
        case GET_GAMES_BY_CATEGORIES_ERROR:
            return {
                ...state,
                error: payload,
            }
        case GET_GAME_DETAILS:
            return {
                ...state,
                chosenGame: payload,
            }
        case GET_GAMES_BY_CATEGORIES:
            return {
                ...state,
                games: payload,
            }
        default:
            return state;
    }; 
};