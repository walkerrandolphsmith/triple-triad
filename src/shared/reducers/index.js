import { combineReducers } from 'redux'
import { routeReducer } from 'redux-simple-router';

import auth from './auth'
import game from './game';
import settings from './settings';

export default combineReducers({
    auth: auth,
    game: game,
    settings: settings,
    routing: routeReducer
});