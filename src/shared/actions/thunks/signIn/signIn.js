import request from 'superagent';
import { push } from 'react-router-redux';
import { requestSignIn, receiveSignIn, signinFormError } from './../../action-creators';
import {
    isValidUsername,
    isValidPassword
} from './../../../utils/formValidation/formValidation';

export function signIn(user) {
    return dispatch => {
        dispatch(requestSignIn());

        let error;
        if(!isValidUsername(user.username)) {
            dispatch(signinFormError({
                field: 'username',
                error: 'Invalid Username'
            }));
            error = true;
        }

        if(!isValidPassword(user.password)) {
            dispatch(signinFormError({
                field: 'password',
                error: 'Invalid Password'
            }));
            error = true;
        }

        if(error) {
            return;
        }

        request
        .post('/api/signIn')
        .send(JSON.stringify(user))
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .end((err, response) => {
            if(response.status === 200) {
                dispatch(receiveSignIn(response.body));
                dispatch(push('/games'));
            } else {
                let message = JSON.parse(response.text);
                dispatch(signinFormError(message));
            }
        });
    };
}