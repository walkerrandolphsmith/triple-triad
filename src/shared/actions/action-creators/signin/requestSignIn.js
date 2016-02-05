import { AUTH_SIGNIN } from './../../../constants/actionTypes';

export function requestSignIn() {
    return {
        type: AUTH_SIGNIN
    }
}