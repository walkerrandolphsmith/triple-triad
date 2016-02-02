import request from 'superagent';
import { pushPath } from 'redux-simple-router';
import { requestSignIn, receiveSignIn } from './../action-creators'

export function signIn(user) {
    return dispatch => {
        dispatch(requestSignIn());
        return request
        .post('/api/sign_in')
        .send(JSON.stringify(user))
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .end((error, response) => {
            if(response.status === 200) {
                dispatch(receiveSignIn(response.body.userId));
                dispatch(pushPath('/settings-selection'));
            }
        });
    };
}