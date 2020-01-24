import {
  START_LOADING,
  UNLOAD
} from './constants';

export const setLoader = () => dispatch => {
  dispatch({
    type: START_LOADING,
  });
}

export const stopLoader = () => dispatch => {
  dispatch({
    type: UNLOAD
  })
}