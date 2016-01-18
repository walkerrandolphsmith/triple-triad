import { AUTH_SIGNIN } from './../../constants/action-types';

export function requestSignIn() {
    return {
        type: AUTH_SIGNIN
    }
}