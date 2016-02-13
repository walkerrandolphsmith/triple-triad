import request from 'superagent';
import {

} from './../../action-creators';

export function resetPassword(token, password, confirmPassword) {
    return dispatch => {
        debugger;
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

                }
            });
    };
}