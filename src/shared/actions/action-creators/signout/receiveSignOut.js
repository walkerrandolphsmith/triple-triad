import { AUTH_SIGNOUT_SUCCESS } from './../../../constants/actionTypes';

export function receiveSignOut() {
    return {
        type: AUTH_SIGNOUT_SUCCESS
    }
}