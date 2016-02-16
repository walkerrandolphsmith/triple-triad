import request from 'superagent';
import { pushPath } from 'redux-simple-router';
import { requestSignUp, receiveUser, signUpFormError } from './../../action-creators';
import {
    isValidUsername,
    isValidPassword,
    passwordsMatch,
    isValidEmail
    } from './../../../utils/formValidation/formValidation';

export function signUp(user) {
    return dispatch => {

        dispatch(requestSignUp());

        const { username, password, confirmPassword, email } = user;

        let error = false;

        if(!isValidUsername(username)) {
            dispatch(signUpFormError({
                field: 'username',
                error: 'Invalid Username'
            }));
            error = true;
        }

        if(!isValidPassword(password)){
            dispatch(signUpFormError({
                field: 'password',
                error: 'Invalid Password'
            }));
            error = true;
        }

        if(!passwordsMatch(password, confirmPassword)){
            dispatch(signUpFormError({
                field: 'username',
                error: 'Passwords must match'
            }));
            error = true;
        }

        if(!isValidEmail(email)){
            dispatch(signUpFormError({
                field: 'email',
                error: 'Invalid email address'
            }));
            error = true;
        }

        if(error){
            return
        }

        return request
            .post('/api/sign_up')
            .send(JSON.stringify(user))
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')
            .end((error, response) => {
                if(response.status === 200) {
                    dispatch(receiveUser(response.body));
                    dispatch(pushPath('/games'));
                }
            });
    };
}