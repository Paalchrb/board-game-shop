import {
  ADD_TO_CART,
  ADD_TO_CART_ERROR,
  REMOVE_FROM_CART,
  TOGGLE_SHOW_CART
} from './constants';
import { getGameById } from '../services/sessions';


export const addToCart = id => async dispatch => {
  try {
    const game = await getGameById(id);

    if(!game) {
      dispatch({
        type: ADD_TO_CART_ERROR,
        payload: { msg: 'Could not find any matching games' }
      })
    }
    
    dispatch({
      type: ADD_TO_CART,
      payload: game
    })
    return game;
  } catch (error) {
    dispatch({
      type: ADD_TO_CART_ERROR,
      payload: error
    })
  }
}

export const removeFromCart = id => dispatch => {
  dispatch({
    type: REMOVE_FROM_CART,
    payload: id
  })
}

export const toggleShopcart = () => dispatch => {
  dispatch({
    type: TOGGLE_SHOW_CART
  })
}