import {
    GET_ALL_GAMES,
    GET_ALL_GAMES_ERROR
} from '../actions/constants';

const initialState = {
    games: [],
    chosenGame: {},
    error: null,
    loading: true
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
            return {
                ...state,
                error: payload,
                loading: false
            }
        default:
            return state;
    }; 
};