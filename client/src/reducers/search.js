import {
  TOGGLE_SEARCH_FIELD,
  UPDATE_SEARCH_WORD
} from '../actions/constants';

const intitailState = {
  showSearchField: false,
  searchText: ''  
}

export default function(state = intitailState, action) {
  const { type, payload } = action;
  switch(type) {
    case TOGGLE_SEARCH_FIELD:
      return {
        ...state,
        showSearchField: !state.showSearchField
      }
    case UPDATE_SEARCH_WORD:
      return {
        ...state,
        searchText: payload
      }
    default:
      return state;
  }
}