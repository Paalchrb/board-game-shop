import {
    GET_ALL_GAMES,
    GET_ALL_GAMES_ERROR,
    GET_GAME_DETAILS,
    GAME_DETAILS_ERROR,
} from '../actions/constants';

const initialState = {
    games: [],
    chosenGame: {},
    error: null,
    loading: true
}

function findIndex(array, id) {
    return array.findIndex(game => game.id === id);
}

export default function(state=initialState, action) {
    const { type, payload } = action;
    switch(type) {
        case GET_ALL_GAMES: 
            return {
                ...state, 
                games: payload, 
                loading: false 
            }
        case GET_ALL_GAMES_ERROR:
        case GAME_DETAILS_ERROR:
            return {
                ...state,
                error: payload,
                loading: false
            }
        case GET_GAME_DETAILS:
            let index = findIndex(state.games, payload);
            return {
                ...state,
                chosenGame: state.games[index],
                loading: false
            }
        default:
            return state;
    }; 
};