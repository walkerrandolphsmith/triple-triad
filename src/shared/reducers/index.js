import { combineReducers } from 'redux'
import { routeReducer } from 'redux-simple-router';

import auth from './auth'
import user from './user';
import game from './game';
import settings from './settings';

export default combineReducers({
    auth: auth,
    user: user,
    game: game,
    settings: settings,
    routing: routeReducer
});