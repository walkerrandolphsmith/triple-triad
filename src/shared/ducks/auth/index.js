import { Map } from 'immutable';

import { signInFailed } from './mutations/signInFailed';
import { signInRequested } from './mutations/signInRequested';
import { signInSucceeded } from './mutations/signInSucceeded';
import { signUpFailed } from './mutations/signUpFailed';
import { signUpRequested } from './mutations/signUpRequested';
import { signUpSucceeded } from './mutations/signUpSucceeded';
import { signOutFailed } from './mutations/signOutFailed';
import { signOutRequested } from './mutations/signOutRequested';
import { signOutSucceeded } from './mutations/signOutSucceeded';
import { avatarUpdated } from './mutations/avatarUpdated';

export const AUTH_SIGNIN = 'AUTH_SIGNIN';
export const AUTH_SIGNIN_SUCCESS = 'AUTH_SIGNIN_SUCCESS';
export const AUTH_SIGNIN_FAIL = 'AUTH_SIGNIN_FAIL';

export const AUTH_SIGNOUT = 'AUTH_SIGNOUT';
export const AUTH_SIGNOUT_SUCCESS = 'AUTH_SIGNOUT_SUCCESS';
export const AUTH_SIGNOUT_FAIL = 'AUTH_SIGNOUT_FAIL';

export const AUTH_SIGNUP_SUCCESS = 'AUTH_SIGNUP_SUCCESS';
export const AUTH_SIGNUP = 'AUTH_SIGNUP';
export const AUTH_SIGNUP_FAIL = 'AUTH_SIGNUP_FAIL';
export const UPDATE_AVATAR = 'UPDATE_AVATAR';

export { signInRequest } from './actions/signInRequest';
export { signInSuccess } from './actions/signInSuccess';
export { signIn } from './thunks/signIn';

export { signUpRequest } from './actions/signUpRequest';
export { signUpSuccess } from './actions/signUpSuccess';
export { signUp } from './thunks/signUp';

export { signOutRequest } from './actions/signOutRequest';
export { signOutSuccess } from './actions/signOutSuccess';
export { signOut } from './thunks/signOut';

export { updateAvatarSuccess } from './actions/updateAvatarSuccess'
export { updateAvatar } from './thunks/updateAvatar';
export { deleteUser } from './thunks/deleteUser';

const INITIAL_STATE = new Map({
    loading: false,
    loaded: false,
    signingIn: false,
    signingOut: false,
    signingUp: false,
    user: new Map({
        id: null,
        email: null,
        username: null,
        isVerified: false,
        avatar: null
    })
});

export default function auth(state = INITIAL_STATE, action = {}) {
    const { type, payload } = action;
    
    switch(type) {
        case AUTH_SIGNIN_FAIL: return signInFailed(state, payload);
        case AUTH_SIGNIN: return signInRequested(state, payload);
        case AUTH_SIGNIN_SUCCESS: return signInSucceeded(state, payload);

        case AUTH_SIGNUP_FAIL: return signUpFailed(state, payload);
        case AUTH_SIGNUP: return signUpRequested(state, payload);
        case AUTH_SIGNUP_SUCCESS: return signUpSucceeded(state, payload);

        case AUTH_SIGNOUT_FAIL: return signOutFailed(state, payload);
        case AUTH_SIGNOUT: return signOutRequested(state, payload);
        case AUTH_SIGNOUT_SUCCESS: return signOutSucceeded(state, payload);
        
        case UPDATE_AVATAR: return avatarUpdated(state, payload);

        default: return state;
    }
}