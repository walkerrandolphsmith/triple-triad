import { AUTH_LOAD_SUCCESS } from './../../constants/action-types';
import cookie from 'react-cookie';

export function receiveAuth() {
    return {
        type: AUTH_LOAD_SUCCESS,
        payload: {
            user: cookie.load('username')
        }
    }
}
