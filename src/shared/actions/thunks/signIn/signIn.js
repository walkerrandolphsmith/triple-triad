import request from 'superagent';
import { pushPath } from 'redux-simple-router';
import { requestSignIn, receiveSignIn, signinFormError } from './../../action-creators'
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

        if(!isValidPassword(user.password)){
            dispatch(signinFormError({
                field: 'password',
                error: 'Invalid Password'
            }));
            error = true;
        }

        if(error){
            return
        }

        return request
        .post('/api/sign_in')
        .send(JSON.stringify(user))
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .end((error, response) => {
            if(response.status === 200) {
                dispatch(receiveSignIn(response.body));
                dispatch(pushPath('/games'));
            }else{
                let error = JSON.parse(response.text);
                dispatch(signinFormError(error));
            }
        });
    };
}