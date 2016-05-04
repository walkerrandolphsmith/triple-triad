import request from 'superagent';
import { setFormError } from './../../reducers/forms';

export const SEND_PASSWORD_RESET_CLEAR = 'SEND_PASSWORD_RESET_CLEAR';
export const SEND_PASSWORD_RESET_FAILED = 'SEND_PASSWORD_RESET_FAILED';
export const SEND_PASSWORD_RESET_REQUEST = 'SEND_PASSWORD_RESET_REQUEST';
export const SEND_PASSWORD_RESET_SUCCESS = 'SEND_PASSWORD_RESET_SUCCESS';

export const sendPasswordResetClear = () => ({ type: SEND_PASSWORD_RESET_CLEAR });
export const sendPasswordResetFailure = () => ({ type: SEND_PASSWORD_RESET_FAILED });
export const sendPasswordResetRequest = () => ({ type: SEND_PASSWORD_RESET_REQUEST });
export const sendPasswordResetSuccess = () => ({ type: SEND_PASSWORD_RESET_SUCCESS });


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
