import {
  TOGGLE_SEARCH_FIELD,
  UPDATE_SEARCH_WORD
} from './constants';

export const toggleSearchField = () => dispatch => {
  dispatch({
    type: TOGGLE_SEARCH_FIELD
  })
}

export const updateSearchWord = text => dispatch => {
  dispatch({
    type: UPDATE_SEARCH_WORD,
    payload: text
  });
}