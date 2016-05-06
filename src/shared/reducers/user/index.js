import { Map } from 'immutable';

import { userProfileFailed } from './mutations/userProfileFailed';
import { userProfileRequested } from './mutations/userProfileRequested';
import { userProfileSucceeded } from './mutations/userProfileSucceeded';

export const USER_PROFILE_FAILED = 'USER_PROFILE_FAILED';
export const USER_PROFILE_REQUEST = 'USER_PROFILE_REQUEST';
export const USER_PROFILE_SUCCESS = 'USER_PROFILE_SUCCESS';

export { userProfileFailure } from './actions/userProfileFailure';
export { userProfileRequest } from './actions/userProfileRequest';
export { userProfileSuccess } from './actions/userProfileSuccess';
export { userProfile } from './thunks/userProfile';

const INITIAL_STATE = new Map({
    loading: false,
    loaded: false,
    failed: false,
    user: new Map({
        verified: null
    })
});

export default function user(state = INITIAL_STATE, action = {}) {
    const { type, payload } = action;

    switch(type) {
        case USER_PROFILE_FAILED: return userProfileFailed(state);
        case USER_PROFILE_REQUEST: return userProfileRequested(state);
        case USER_PROFILE_SUCCESS: return userProfileSucceeded(state, payload);
        default: return state;
    }
}