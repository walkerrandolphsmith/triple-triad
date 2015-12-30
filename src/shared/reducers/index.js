import { combineReducers } from 'redux';

import game from './game';
import settings from './settings';
import step from './step';

export default combineReducers({
    game, settings, step
});


