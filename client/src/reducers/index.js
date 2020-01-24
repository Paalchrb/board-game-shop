import { combineReducers } from 'redux';

import games from './games';
import categories from './categories'


export default combineReducers({
    games,
    categories
});
