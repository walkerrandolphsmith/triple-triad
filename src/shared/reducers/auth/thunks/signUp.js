import request from 'superagent';
import {
    isValidUsername, isValidPassword, passwordsMatch, isValidEmail
} from './../../../utils/formValidation/formValidation';
import { push } from 'react-router-redux';
import { setFormError } from './../../forms/actions/setFormError';
import { signUpRequest } from './../actions/signUpRequest';
import { signUpSuccess } from './../actions/signUpSuccess';
export const signUp = user => dispatch => {
    dispatch(signUpRequest());

    const { username, password, confirmPassword, email } = user;

    let error = false;

    if(!isValidUsername(username)) {
        dispatch(setFormError({
            form: 'signUp',
            field: 'username',
            error: 'Invalid Username'
        }));
        error = true;
    }

    if(!isValidPassword(password)) {
        dispatch(setFormError({
            form: 'signUp',
            field: 'password',
            error: 'Invalid Password'
        }));
        error = true;
    }

    if(!passwordsMatch(password, confirmPassword)) {
        dispatch(setFormError({
            form: 'signUp',
            field: 'confirmPassword',
            error: 'Passwords must match'
        }));
        error = true;
    }

    if(!isValidEmail(email)) {
        dispatch(setFormError({
            form: 'signUp',
            field: 'email',
            error: 'Invalid email address'
        }));
        error = true;
    }

    if(error) {
        return;
    }

    request
        .post('/api/signUp')
        .send(JSON.stringify(user))
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .end((err, response) => {
            if(response.status === 200) {
                dispatch(signUpSuccess(response.body));
                dispatch(push('/games'));
            } else {
                let message = JSON.parse(response.text);
                message.form = 'signUp';
                dispatch(setFormError(message));
            }
        });
};