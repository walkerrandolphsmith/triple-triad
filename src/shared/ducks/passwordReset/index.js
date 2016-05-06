import { Map } from 'immutable';

import { passwordResetCleared } from './mutations/passwordResetCleared';
import { passwordResetFailed } from './mutations/passwordResetFailed';
import { passwordResetRequested } from './mutations/passwordResetRequested';
import { passwordResetSucceeded } from './mutations/passwordResetSucceeded';

export const PASSWORD_RESET_CLEAR = 'PASSWORD_RESET_CLEAR';
export const PASSWORD_RESET_FAILED = 'PASSWORD_RESET_FAILED';
export const PASSWORD_RESET_REQUEST = 'PASSWORD_RESET_REQUEST';
export const PASSWORD_RESET_SUCCESS = 'PASSWORD_RESET_SUCCESS';

export { passwordResetClear } from './actions/passwordResetClear';
export { passwordResetFailure } from './actions/passwordResetFailure';
export { passwordResetRequest } from './actions/passwordResetRequest';
export { passwordResetSuccess } from './actions/passwordResetSuccess';
export { passwordReset } from './thunks/passwordReset';

const INITIAL_STATE = new Map({
    loading: false,
    loaded: false,
    failed: false
});

export default function user(state = INITIAL_STATE, action = {}) {
    switch(action.type) {
        case PASSWORD_RESET_CLEAR: return passwordResetCleared(state);
        case PASSWORD_RESET_FAILED: return passwordResetFailed(state);
        case PASSWORD_RESET_REQUEST: return passwordResetRequested(state);
        case PASSWORD_RESET_SUCCESS: return passwordResetSucceeded(state);

        default: return state;
    }
}