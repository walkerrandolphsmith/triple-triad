import request from 'superagent';
import { userProfileFailure } from './../actions/userProfileFailure';
import { userProfileRequest } from './../actions/userProfileRequest';
import { userProfileSuccess } from './../actions/userProfileSuccess';

export const userProfile = id => dispatch => {
    dispatch(userProfileRequest());
    return request
        .post('/api/userProfile')
        .send(JSON.stringify({ userId: id }))
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .end((error, response) => {
            if(response.status === 200) {
                const user = {
                    verified: response.body.verified
                };
                dispatch(userProfileSuccess(user));
            } else {
                dispatch(userProfileFailure())
            }
        });
};