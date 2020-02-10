import {
    GET_CATEGORIES,
    GET_CATEGORIES_ERROR,
    CHECK_CATEGORY,
    SET_PLAYER_RANGE,
    SET_PAGE
} from '../actions/constants';

const initialState = {
    categories: [],
    players: [1, 6],
    page: 0,
    error: null,
}

function getIndex(array, id) {
    return array.findIndex(category => category.id === id);
  }

export default function(state=initialState, action) {
    const { type, payload } = action;
    switch(type) {
        case GET_CATEGORIES:
            return {
                ...state,
                categories: payload,
            }
        case GET_CATEGORIES_ERROR:
            return {
                ...state,
                error: payload,
            }
        case CHECK_CATEGORY:
            let index = getIndex(state.categories, payload);
            if (index !== -1) {
                return {
                    ...state,
                    categories: [
                        ...state.categories.slice(0, index),
                        {
                            ...state.categories[index],
                            checked: !state.categories[index].checked
                        },
                        ...state.categories.slice(index + 1)
                    ]
                }
            } else {
                return state;
            }
        case SET_PLAYER_RANGE:
            return {
                ...state,
                players: payload
            }
        case SET_PAGE:
            return {
                ...state,
                page: payload
            }
        default:
            return state;
    }
}