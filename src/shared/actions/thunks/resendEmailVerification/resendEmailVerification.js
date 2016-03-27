import request from 'superagent';
import {
    resendEmailVerificationRequest,
    resendEmailVerificationSuccess,
    resendEmailVerificationFailed,
    resendEmailVerificationClear
} from './../../action-creators';

export function resendEmailVerification(id) {
    return dispatch => {
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
                dispatch(resendEmailVerificationFailed());
            }
            setTimeout(() => {
                dispatch(resendEmailVerificationClear());
            }, 2500);
        });
    };
}