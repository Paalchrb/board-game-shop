import {
    GET_CATEGORIES,
    GET_CATEGORIES_ERROR
} from '../actions/constants';

const initialState = {
    categories: [],
    error: null,
    loading: true
}

export default function(state=initialState, action) {
    const { type, payload } = action;
    switch(type) {
        case GET_CATEGORIES:
            return {
                ...state,
                categories: payload,
                loading: false
            }
        case GET_CATEGORIES_ERROR:
            return {
                ...state,
                error: payload,
                loading: false
            }
        default:
            return state;
    }
}