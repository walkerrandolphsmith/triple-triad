import { AUTH_SIGNUP_SUCCESS } from './../../constants/actionTypes';

export function receiveUser(username) {
    return {
        type: AUTH_SIGNUP_SUCCESS,
        payload: {
            user: {
                name: username,
                id: username
            }
        }
    }
}