import { Map } from 'immutable';
import {
    USER_PROFILE,
    USER_PROFILE_SUCCESS
} from './../../constants/actionTypes';

import userProfileRequest from './userProfileRequest';
import userProfileSuccess from './userProfileSuccess';

const INITIAL_STATE = new Map({
    loading: false,
    loaded: false,
    user: new Map({
        verified: null
    })
});

export default function user(state = INITIAL_STATE, action = {}) {
    const { type, payload } = action;

    switch(type) {
        case USER_PROFILE: return userProfileRequest(state);
        case USER_PROFILE_SUCCESS: return userProfileSuccess(state, payload);
        default: return state;
    }
}