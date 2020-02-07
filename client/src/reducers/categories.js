import {
    GET_CATEGORIES,
    GET_CATEGORIES_ERROR,
    CHECK_CATEGORY
} from '../actions/constants';

const initialState = {
    categories: [],
    players: [],
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
        default:
            return state;
    }
}