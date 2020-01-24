import {
    GET_CATEGORIES,
    GET_CATEGORIES_ERROR
} from './constants';
import { getCategories } from '../services/sessions';

export const getAllCategories = () => async dispatch => {
    try {
        const categories = await getCategories();
        dispatch({
            type: GET_CATEGORIES,
            payload: categories
        })
    } catch(error) {
        dispatch({
            type: GET_CATEGORIES_ERROR,
            payload: error
        })
    }
}