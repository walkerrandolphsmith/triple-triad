import request from 'superagent';
import {
    requestResendEmailVerification,
    receiveResendEmailVerification,
    failResendEmailVerification,
    clearEmailVerificationState
} from './../../action-creators';

export function resendVerificationEmail(id) {
    return dispatch => {
        dispatch(requestResendEmailVerification());
        return request
        .post('/api/resend_verification_email')
        .send(JSON.stringify({userId: id}))
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .end((error, response) => {
            if(response.status === 200)
                dispatch(receiveResendEmailVerification());
            else
                dispatch(failResendEmailVerification());

            setTimeout(() => {
                dispatch(clearEmailVerificationState())
            }, 2500);
        });
    };
}