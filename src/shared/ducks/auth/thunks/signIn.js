import request from 'superagent';
import { isValidUsername, isValidPassword } from './../../../utils/formValidation/formValidation';
import { push } from 'react-router-redux';
import { setFormError } from './../../forms/actions/setFormError';
import { signInRequest } from './../actions/signInRequest';
import { signInSuccess } from './../actions/signInSuccess';

export const signIn = user => dispatch => {
    debugger;
    dispatch(signInRequest());

    let error;
    if(!isValidUsername(user.username)) {
        dispatch(setFormError({
            form: 'signIn',
            field: 'username',
            error: 'Invalid Username'
        }));
        error = true;
    }

    if(!isValidPassword(user.password)) {
        dispatch(setFormError({
            form: 'signIn',
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
                dispatch(signInSuccess(response.body));
                dispatch(push('/games'));
            } else {
                let message = JSON.parse(response.text);
                message.form = 'signIn';
                dispatch(setFormError(message));
            }
        });
};