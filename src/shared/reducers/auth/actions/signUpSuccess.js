import { AUTH_SIGNUP_SUCCESS } from './../index';
export const signUpSuccess = user => ({
    type: AUTH_SIGNUP_SUCCESS,
    payload: {
        user: {
            name: user.name,
            id: user.id
        }
    }
});