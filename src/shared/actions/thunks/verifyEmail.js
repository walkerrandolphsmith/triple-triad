import request from 'superagent';
import { emailVerified } from './../action-creators';

export function verifyEmail(token) {
    return dispatch => {
        dispatch(requestSignIn());
        return request
        .post('/api/verify_email')
        .send(JSON.stringify(token))
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .end((error, response) => {
            if(response.status === 200) {
                dispatch(emailVerified(true));
            }else{
                dispatch(emailVerified(false));
            }
        });
    };
}