import { AUTH_LOAD_SUCCESS } from './../../constants/actionTypes';
import cookie from 'react-cookie';

export function receiveAuth() {
    return {
        type: AUTH_LOAD_SUCCESS,
        payload: {
            user: cookie.load('username')
        }
    }
}
