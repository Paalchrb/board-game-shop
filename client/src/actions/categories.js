import {
    GET_CATEGORIES,
    GET_CATEGORIES_ERROR,
    CHECK_CATEGORY,
    SET_PLAYER_RANGE,
    SET_PAGE
} from './constants';
import { getCategories } from '../services/sessions';

export const getAllCategories = () => async dispatch => {
    try {
        const categories = await getCategories();
        dispatch({
            type: GET_CATEGORIES,
            payload: categories
        })
        return categories
    } catch(error) {
        dispatch({
            type: GET_CATEGORIES_ERROR,
            payload: error
        })
    }
}

export const toggleCategoryCheck = id => dispatch => {
    dispatch({
        type: CHECK_CATEGORY,
        payload: id
    })
    return id;
}

export const setPlayerRange = (rangeArray) => dispatch => {
    dispatch({
        type: SET_PLAYER_RANGE,
        payload: rangeArray
    });
}

export const setPage = page => dispatch => {
    dispatch({
        type: SET_PAGE,
        payload: page
    })
}