import request from 'superagent';
import {
    sendPasswordResetClear,
    sendPasswordResetFailed,
    sendPasswordResetRequest,
    sendPasswordResetSuccess,
    forgotPasswordFormError
} from './../../action-creators';

export function sendPasswordReset(email) {
    return dispatch => {
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
                    dispatch(forgotPasswordFormError({
                        field: 'email',
                        error: 'This user does not exist'
                    }));
                }
                dispatch(sendPasswordResetFailed());
            }

            setTimeout(() => {
                dispatch(sendPasswordResetClear());
            }, 2500);
        });
    };
}