import { AUTH_SIGNIN_SUCCESS } from './../index';
export const signInSuccess = user => ({
    type: AUTH_SIGNIN_SUCCESS,
    payload: {
        user: {
            name: user.name,
            id: user.id,
            isVerified: user.isVerified
        }
    }
});