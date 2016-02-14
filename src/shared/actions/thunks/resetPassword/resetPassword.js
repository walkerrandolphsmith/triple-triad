import request from 'superagent';
import {
    passwordResetClear,
    passwordResetFailed,
    passwordResetRequest,
    passwordResetSuccess
} from './../../action-creators';

export function resetPassword(token, password, confirmPassword) {
    return dispatch => {
        dispatch(passwordResetRequest());
        return request
            .post('/api/reset_password')
            .send(JSON.stringify({
                token: token,
                password: password,
                confirmPassword: confirmPassword
            }))
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')
            .end((error, response) => {
                if(response.status === 200){
                    dispatch(passwordResetSuccess())
                }else{
                    dispatch(passwordResetFailed())
                }

                setTimeout(() => {
                    dispatch(passwordResetClear())
                }, 1000);
            });
    };
}