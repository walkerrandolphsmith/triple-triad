import request from 'superagent';
import { createGameRequest, createGameSuccess, createGameFailed } from './../../action-creators';

export function createGame() {
    return (dipatch, getState) => {
        dipatch(createGameRequest());
        const state = getState();
        const deck = state.game.get('deck').toJS();
        const ownerId = state.auth.get('user').get('id');

        const game = JSON.stringify({
            userId: ownerId,
            deck: deck
        });

        return request
        .post('/api/createGame')
        .send(game)
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .end((err, response) => {
            if(response.status === 200) {
                dipatch(createGameSuccess(response.body));
            } else {
                dipatch(createGameFailed());
            }
        });
    };
}