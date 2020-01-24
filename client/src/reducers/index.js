import { combineReducers } from 'redux';

import games from './games';
import categories from './categories'
import loading from './loading';
import shopcart from './shopcart';


export default combineReducers({
    games,
    categories,
    shopcart,
    loading
});
