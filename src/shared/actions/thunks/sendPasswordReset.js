import request from 'superagent';
import {
    requestSendPasswordReset,
    receiveSendPasswordReset,
    failSendPasswordReset,
    clearSendPasswordReset
} from './../action-creators';

export function sendPasswordReset(email) {
    return dispatch => {
        dispatch(requestSendPasswordReset());
        return request
        .post('/api/forgot_password')
        .send(JSON.stringify({email: email}))
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .end((error, response) => {
                debugger;
            if(response.status === 200)
                dispatch(receiveSendPasswordReset());
            else
                dispatch(failSendPasswordReset());

            setTimeout(() => {
                dispatch(clearSendPasswordReset())
            }, 2500);
        });
    };
}