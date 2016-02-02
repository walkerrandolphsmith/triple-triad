import request from 'superagent';
import { pushPath } from 'redux-simple-router';
import { requestSignOut, receiveSignOut } from './../action-creators'

export function signOut() {
    return dispatch => {
        dispatch(requestSignOut());
        return request
            .post('/api/signout')
            .end((error, response) => {
                if(response.status === 200) {
                    dispatch(receiveSignOut());
                    dispatch(pushPath('/'));
                }
            });
    }
}