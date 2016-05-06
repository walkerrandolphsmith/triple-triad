import request from 'superagent';
import { resendEmailVerificationClear } from './../actions/resendEmailVerificationClear';
import { resendEmailVerificationFailure } from './../actions/resendEmailVerificationFailure';
import { resendEmailVerificationRequest } from './../actions/resendEmailVerificationRequest';
import { resendEmailVerificationSuccess } from './../actions/resendEmailVerificationSuccess';

export const resendEmailVerification = id => dispatch => {
    dispatch(resendEmailVerificationRequest());
    return request
        .post('/api/resendVerificationEmail')
        .send(JSON.stringify({ userId: id }))
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .end((error, response) => {
            if(response.status === 200) {
                dispatch(resendEmailVerificationSuccess());
            } else {
                dispatch(resendEmailVerificationFailure());
            }
            setTimeout(() => {
                dispatch(resendEmailVerificationClear());
            }, 2500);
        });
};