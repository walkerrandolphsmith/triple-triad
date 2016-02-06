import { combineReducers } from 'redux'
import { routeReducer } from 'redux-simple-router';

import auth from './auth'
import user from './user';
import game from './game';
import games from './games';
import settings from './settings';

export default combineReducers({
    auth: auth,
    user: user,
    game: game,
    games: games,
    settings: settings,
    routing: routeReducer
});