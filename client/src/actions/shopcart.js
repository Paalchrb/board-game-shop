import {
  ADD_TO_CART,
  ADD_TO_CART_ERROR,
  REMOVE_FROM_CART,
  TOGGLE_SHOW_CART,
  UPDATE_CART
} from './constants';
import { getGameById } from '../services/sessions';

export const updateCart = id => async dispatch => {
  try {
    const game = await getGameById(id);

    if(!game) {
      return dispatch({
        type: ADD_TO_CART_ERROR,
        payload: { msg: 'Could not find any matching games' }
      })
    }
    
    dispatch({
      type: ADD_TO_CART,
      payload: game
    })
  } catch (error) {
    dispatch({
      type: ADD_TO_CART_ERROR,
      payload: error
    })
  }
}

export const addToCart = id => async dispatch => {
  const savedItems = JSON.parse(localStorage.getItem('cart-items')) || [];
  try {
    const game = await getGameById(id);

    if(!game) {
      return dispatch({
        type: ADD_TO_CART_ERROR,
        payload: { msg: 'Could not find any matching games' }
      })
    }
    
    dispatch({
      type: ADD_TO_CART,
      payload: game
    })
    savedItems.push(game);
    localStorage.setItem('cart-items', JSON.stringify(savedItems));
    return game;
  } catch (error) {
    dispatch({
      type: ADD_TO_CART_ERROR,
      payload: error
    })
  }
}

export const removeFromCart = id => dispatch => {
 const savedItems = JSON.parse(localStorage.getItem('cart-items')) || [];
 const index = savedItems.findIndex(obj => obj.id === id);

  dispatch({
    type: REMOVE_FROM_CART,
    payload: id
  })

if (index !== -1) {
  savedItems.splice(index, 1);
}
localStorage.setItem('cart-items', JSON.stringify(savedItems));
}

export const toggleShopcart = () => dispatch => {
  dispatch({
    type: TOGGLE_SHOW_CART
  })
}