import request from 'superagent';
import { setFormError } from './../../forms/actions/setFormError';
import { sendPasswordResetClear } from './../actions/sendPasswordResetClear';
import { sendPasswordResetFailure } from './../actions/sendPasswordResetFailure';
import { sendPasswordResetRequest } from './../actions/sendPasswordResetRequest';
import { sendPasswordResetSuccess } from './../actions/sendPasswordResetSuccess';

export const sendPasswordReset = email => dispatch => {
    dispatch(sendPasswordResetSuccess());
    return request
        .post('/api/forgotPassword')
        .send(JSON.stringify({ email: email }))
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .end((error, response) => {
            if(response.status === 200) {
                dispatch(sendPasswordResetRequest());
            } else {
                if(response.body.invalidEmail) {
                    dispatch(setFormError({
                        form: 'resetPassword',
                        field: 'email',
                        error: 'This user does not exist'
                    }));
                }
                dispatch(sendPasswordResetFailure());
            }

            setTimeout(() => {
                dispatch(sendPasswordResetClear());
            }, 2500);
        });
};