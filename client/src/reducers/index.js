import { combineReducers } from 'redux';

import games from './games';
import loading from './loading';
import shopcart from './shopcart';


export default combineReducers({
    games,
    shopcart,
    loading
});