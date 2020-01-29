import {
  ADD_TO_CART,
  ADD_TO_CART_ERROR,
  REMOVE_FROM_CART,
  REMOVE_FROM_CART_ERROR,
  TOGGLE_SHOW_CART
} from '../actions/constants';

const initialState = {
  cartItems: [],
  error: null,
  showCart: false
};

function getIndex(array, id) {
  return array.findIndex(game => game.id === id);
}

export default function(state=initialState, action) {
  const { type, payload } = action;
  switch(type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: [
          ...state.cartItems,
          payload
        ]
      }
      case REMOVE_FROM_CART:
        let index = getIndex(state.cartItems, payload);
        return {
          ...state,
          cartItems: [
            ...state.cartItems.slice(0, index),
            ...state.cartItems.slice(index + 1)
          ]
        }
      case TOGGLE_SHOW_CART:
        return {
          ...state,
          showCart: !state.showCart
        }
      case ADD_TO_CART_ERROR:
        return {
          ...state,
          error: payload
        }
    default:
      return state;
  }
}