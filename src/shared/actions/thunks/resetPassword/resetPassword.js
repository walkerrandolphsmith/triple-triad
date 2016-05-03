import request from 'superagent';
import {
    passwordResetClear,
    passwordResetFailed,
    passwordResetRequest,
    passwordResetSuccess
} from './../../action-creators';

import { setFormError } from './../../../reducers/forms';


import {
    isValidPassword,
    passwordsMatch
} from './../../../utils/formValidation/formValidation';

export function resetPassword(token, password, confirmPassword) {
    return dispatch => {
        dispatch(passwordResetRequest());

        let error;
        if(!isValidPassword(password)) {
            dispatch(setFormError({
                form: 'resetPassword',
                field: 'password',
                error: 'Invalid Password'
            }));
            error = true;
        }

        if(!passwordsMatch(password, confirmPassword)) {
            dispatch(setFormError({
                form: 'resetPassword',
                field: 'password',
                error: 'Passwords must match'
            }));
            error = true;
        }

        if(error) {
            return;
        }

        request
            .post('/api/resetPassword')
            .send(JSON.stringify({
                token: token,
                password: password,
                confirmPassword: confirmPassword
            }))
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')
            .end((err, response) => {
                if(response.status === 200) {
                    dispatch(passwordResetSuccess());
                } else {
                    dispatch(passwordResetFailed());
                }
                setTimeout(() => {
                    dispatch(passwordResetClear());
                }, 1000);
            });
    };
}