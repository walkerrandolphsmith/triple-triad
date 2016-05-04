import { Map } from 'immutable';
import request from 'superagent';

export const USER_PROFILE_FAILED = 'USER_PROFILE_FAILED';
export const USER_PROFILE_REQUEST = 'USER_PROFILE_REQUEST';
export const USER_PROFILE_SUCCESS = 'USER_PROFILE_SUCCESS';

export const userProfileFailure = () => ({ type: USER_PROFILE_FAILED });
export const userProfileRequest = () => ({ type: USER_PROFILE_REQUEST });
export const userProfileSuccess = user => ({
    type: USER_PROFILE_SUCCESS,
    payload: {
        user: user
    }
});

export const userProfile = id => dispatch => {
    dispatch(userProfileRequest());
    return request
        .post('/api/userProfile')
        .send(JSON.stringify({ userId: id }))
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .end((error, response) => {
            if(response.status === 200) {
                const user = {
                    verified: response.body.verified
                };
                dispatch(userProfileSuccess(user));
            } else {
                dispatch(userProfileFailure())
            }
        });
};

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

export const userProfileFailed = state => state
    .set('loaded', false)
    .set('loading', false)
    .set('failed', true);

export const userProfileRequested = state => state
    .set('loaded', false)
    .set('loading', true)
    .set('failed', false);

export const userProfileSucceeded = (state, payload) => state
    .set('loaded', true)
    .set('loading', false)
    .set('failed', false)
    .setIn('user.verified'.split('.'), payload.user.verified);