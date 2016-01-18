import { AUTH_SIGNOUT_SUCCESS } from './../../constants/action-types';

export function receiveSignOut() {
    return {
        type: AUTH_SIGNOUT_SUCCESS
    }
}