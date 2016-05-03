import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

import auth from './auth/auth';
import forms from './forms';
import game from './game/game';
import settings from './settings/settings';
import user from './user/user';

export default combineReducers({
    auth,
    forms,
    game,
    settings,
    user,
    routing: router
});