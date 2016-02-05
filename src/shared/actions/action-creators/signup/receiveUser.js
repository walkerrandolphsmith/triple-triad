import { AUTH_SIGNUP_SUCCESS } from './../../../constants/actionTypes';

export function receiveUser(user) {
    return {
        type: AUTH_SIGNUP_SUCCESS,
        payload: {
            user: {
                name: user.name,
                id: user.id
            }
        }
    }
}