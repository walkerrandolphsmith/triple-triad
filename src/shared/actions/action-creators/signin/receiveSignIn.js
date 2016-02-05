import { AUTH_SIGNIN_SUCCESS } from './../../../constants/actionTypes';

export function receiveSignIn(user) {
    return {
        type: AUTH_SIGNIN_SUCCESS,
        payload: {
            user: {
                name: user.name,
                id: user.id
            }
        }
    }
}
