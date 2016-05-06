import request from 'superagent';
import deck from './../../../constants/deck';
import PHASES from './../../../constants/phases';
import { createGameRequest, createGameSuccess, createGameFailure } from './../index';

export function createGame() {
    return (dipatch, getState) => {
        dipatch(createGameRequest());
        const state = getState();
        const ownerId = state.auth.get('user').get('id');

        const game = JSON.stringify({
            userId: ownerId,
            deck: deck,
            phase: PHASES.SETTINGS_SELECTION
        });

        return request
        .post('/api/createGame')
        .send(game)
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .end((err, response) => {
            if(response.status === 200) {
                let game = response.body;
                game.id = game._id;
                dipatch(createGameSuccess(game));
            } else {
                dipatch(createGameFailure());
            }
        });
    };
}