import {
  START_LOADING,
  UNLOAD
} from '../actions/constants';

const initialState = {
  isLoading: true
}

export default function(state=initialState, action) {
  const { type } = action;
  switch(type) {
    case START_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case UNLOAD:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
}