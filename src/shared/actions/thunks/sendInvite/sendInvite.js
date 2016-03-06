import request from 'superagent';
import { sendInviteRequest, sendInviteSuccess, sendInviteFailed } from './../../action-creators';

export function sendInvite(email) {
    return dispatch => {
        dispatch(sendInviteRequest());

        const data = {
          email: email
        };

        return request
        .post('/api/invite')
        .send(JSON.stringify(data))
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .end((error, response) => {
            if(response.status === 200){
                dispatch(sendInviteSuccess());
            }else{
                dispatch(sendInviteFailed());
            }
        });
    };
}
