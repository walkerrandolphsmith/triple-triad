import { AUTH_SIGNIN_SUCCESS } from './../../constants/actionTypes';

export function receiveSignIn(userId) {
    return {
        type: AUTH_SIGNIN_SUCCESS,
        payload: {
            user: {
                name: userId,
                id: userId
            }
        }
    }
}
