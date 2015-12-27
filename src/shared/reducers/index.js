import { combineReducers } from 'redux';

import game from './game';
import settings from './settings';

export default combineReducers({
    game, settings
});


