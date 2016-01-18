import fetch from 'isomorphic-fetch';
import { pushPath } from 'redux-simple-router';
import cookie from 'react-cookie';
import { requestSignOut, receiveSignOut } from './../action-creators'

export function signOut() {
    return dispatch => {
        dispatch(requestSignOut());
        return fetch('/api/signout')
            .then(response => {
                if(response.ok) {
                    cookie.remove('username');
                    dispatch(receiveSignOut());
                    dispatch(pushPath('/'));
                }
            })
            .catch(error => {throw error});
    }
}