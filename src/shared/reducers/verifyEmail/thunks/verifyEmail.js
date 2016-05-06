import request from 'superagent';
import { verifyEmailSuccess } from './../actions/verifyEmailSuccess';

export const verifyEmail = token => dispatch => {
    return request
        .post('/api/verifyEmail')
        .send(JSON.stringify({ token: token }))
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .end((error, response) => {
            if(response.status === 200) {
                dispatch(verifyEmailSuccess(true));
            } else {
                dispatch(verifyEmailSuccess(false));
            }
        });
};