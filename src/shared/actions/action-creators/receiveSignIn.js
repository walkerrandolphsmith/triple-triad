import { AUTH_SIGNIN_SUCCESS } from './../../constants/actionTypes';

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
