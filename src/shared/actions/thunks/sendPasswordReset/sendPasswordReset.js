import request from 'superagent';
import {
    sendPasswordResetClear,
    sendPasswordResetFailed,
    sendPasswordResetRequest,
    sendPasswordResetSuccess
} from './../../action-creators';

export function sendPasswordReset(email) {
    return dispatch => {
        dispatch(sendPasswordResetSuccess());
        return request
        .post('/api/forgot_password')
        .send(JSON.stringify({email: email}))
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .end((error, response) => {
            if(response.status === 200)
                dispatch(sendPasswordResetRequest());
            else
                dispatch(sendPasswordResetFailed());

            setTimeout(() => {
                dispatch(sendPasswordResetClear())
            }, 2500);
        });
    };
}