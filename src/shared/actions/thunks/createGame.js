import request from 'superagent';
import { requestNewGame, receiveNewGame, createGameFailed } from './../action-creators';

export function createGame() {
    return (dipatch, getState) => {
        dipatch(requestNewGame());
        const state = getState();
        const deck = state.game.get('deck').toJS();
        const ownerId = state.auth.get('user').get('id');

        const game = JSON.stringify({
            userId: ownerId,
            deck: deck
        });

        return request
        .post('/api/create_game')
        .send(game)
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .end((err, response) => {
            if(response.status === 200){
                dipatch(receiveNewGame(response.body));
            }else{
                dipatch(createGameFailed());
            }
        });
    }
}