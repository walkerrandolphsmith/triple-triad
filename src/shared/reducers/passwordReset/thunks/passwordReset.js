import request from 'superagent';
import { isValidPassword, passwordsMatch } from './../../../utils/formValidation/formValidation';
import { setFormError } from './../../forms/actions/setFormError';
import { passwordResetClear } from './../actions/passwordResetClear';
import { passwordResetFailure } from './../actions/passwordResetFailure';
import { passwordResetRequest } from './../actions/passwordResetRequest';
import { passwordResetSuccess } from './../actions/passwordResetSuccess';

export const passwordReset = (token, password, confirmPassword) => dispatch => {
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
                dispatch(passwordResetFailure());
            }
            setTimeout(() => {
                dispatch(passwordResetClear());
            }, 1000);
        });
};
