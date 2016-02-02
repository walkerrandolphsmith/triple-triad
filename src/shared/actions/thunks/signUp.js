import request from 'superagent';
import { pushPath } from 'redux-simple-router';
import { requestSignUp, receiveUser } from './../action-creators'

export function signUp(user) {
    return dispatch => {
        dispatch(requestSignUp());
        return request
            .post('/api/sign_up')
            .send(JSON.stringify(user))
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')
            .end((error, response) => {
                if(response.status === 200) {
                    dispatch(receiveUser(response.body.userId));
                    dispatch(pushPath('/settings-selection'));
                }
            });
    };
}