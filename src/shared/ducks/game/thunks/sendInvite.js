import request from 'superagent';
import { sendInviteRequest, sendInviteSuccess, sendInviteFailure, endPhase } from './../index';

export function sendInvite(gameId, email) {
    return (dispatch, getState) => {
        dispatch(sendInviteRequest());

        const state = getState();
        const gameOwner = state.auth.get('user').id;

        const data = {
            gameId: gameId,
            invitee: email,
            gameOwner: gameOwner
        };

        return request
        .post('/api/invite')
        .send(JSON.stringify(data))
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .end((error, response) => {
            if(response.status === 200) {
                dispatch(sendInviteSuccess());
                dispatch(endPhase());
            } else {
                dispatch(sendInviteFailure());
            }
        });
    };
}
