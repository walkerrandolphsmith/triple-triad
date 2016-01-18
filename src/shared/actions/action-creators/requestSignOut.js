import { AUTH_SIGNOUT } from './../../constants/action-types';

export function requestSignOut() {
    return {
        type: AUTH_SIGNOUT
    }
}