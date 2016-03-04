import request from 'superagent';
import { endPhase } from './../endPhase/endPhase';

export function sendInvite(email) {
    return dispatch => {
        dispatch(endPhase());


        const data = {
          email: email
        };

        return request
        .post('/api/invite')
        .send(JSON.stringify(data))
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .end((error, response) => {

        });
    };
}
