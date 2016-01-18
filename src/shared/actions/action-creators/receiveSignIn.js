import { AUTH_SIGNIN_SUCCESS } from './../../constants/action-types';

export function receiveSignIn(username) {
    return {
        type: AUTH_SIGNIN_SUCCESS,
        payload: {
            user: {
                name: username,
                id: username
            }
        }
    }
}
