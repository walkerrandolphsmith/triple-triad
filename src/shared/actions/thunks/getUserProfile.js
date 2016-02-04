import request from 'superagent';
import { requestUserProfile, receiveUserProfile } from './../action-creators';

export function getUserProfile(id) {
    return dispatch => {
        dispatch(requestUserProfile());
        return request
            .post('/api/user_profile')
            .send(JSON.stringify({userId: id}))
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')
            .end((error, response) => {
                if(response.status === 200) {
                    const user = {
                        verified: response.body.verified
                    };
                    dispatch(receiveUserProfile(user));
                }
            });
    };
}