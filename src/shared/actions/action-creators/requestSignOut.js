import { AUTH_SIGNOUT } from './../../constants/actionTypes';

export function requestSignOut() {
    return {
        type: AUTH_SIGNOUT
    }
}