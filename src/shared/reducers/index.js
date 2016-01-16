import { combineReducers } from 'redux'
import { routeReducer } from 'redux-simple-router';

import game from './game';
import settings from './settings';

export default combineReducers({
    game: game,
    settings: settings,
    routing: routeReducer
});