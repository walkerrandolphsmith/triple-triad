import cookie from 'react-cookie';
import fetch from 'isomorphic-fetch';
import { pushPath } from 'redux-simple-router';
import { requestSignUp, receiveUser } from './../action-creators'

export function signUp(user) {
    return dispatch => {
        dispatch(requestSignUp());
        return fetch('/api/sign_up', {
            method: 'post',
            headers: {
                'Accept': 'application/json', 'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(response => {
            if(response.ok) {
                cookie.save('username', user.username);
                dispatch(receiveUser(user.username));
                dispatch(pushPath('/settings-selection'));
            }
        })
        .catch(error => {throw error});
    };
}