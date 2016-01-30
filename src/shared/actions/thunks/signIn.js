import fetch from 'isomorphic-fetch';
import { pushPath } from 'redux-simple-router';
import { requestSignIn, receiveSignIn } from './../action-creators'

export function signIn(user) {
    return dispatch => {
        dispatch(requestSignIn());
        return fetch('/api/sign_in', {
            method: 'post',
            headers: {
                'Accept': 'application/json', 'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(response => {
            if(response.ok) {
                dispatch(receiveSignIn(user.username));
                dispatch(pushPath('/settings-selection'));
            }
        })
        .catch(error => {throw error});
    };
}