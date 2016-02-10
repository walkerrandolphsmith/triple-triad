import { combineReducers } from 'redux'
import { routeReducer } from 'redux-simple-router';

import auth from './auth/auth'
import user from './user/user';
import game from './game/game';
import games from './games/games';
import settings from './settings/settings';

export default combineReducers({
    auth: auth,
    user: user,
    game: game,
    games: games,
    settings: settings,
    routing: routeReducer
});