import request from 'superagent';
import {
    passwordResetClear,
    passwordResetFailed,
    passwordResetRequest,
    passwordResetSuccess,
    resetPasswordFormError
} from './../../action-creators';

import {
    isValidPassword,
    passwordsMatch
} from './../../../utils/formValidation/formValidation';

export function resetPassword(token, password, confirmPassword) {
    return dispatch => {
        dispatch(passwordResetRequest());

        let error;
        if(!isValidPassword(password)) {
            dispatch(resetPasswordFormError({
                field: 'password',
                error: 'Invalid Password'
            }));
            error = true;
        }

        if(!passwordsMatch(password, confirmPassword)) {
            dispatch(resetPasswordFormError({
                field: 'password',
                error: 'Passwords must match'
            }));
            error = true;
        }

        if(error) {
            return;
        }

        request
            .post('/api/reset_password')
            .send(JSON.stringify({
                token: token,
                password: password,
                confirmPassword: confirmPassword
            }))
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')
            .end((error, response) => {
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