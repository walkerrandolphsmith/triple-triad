import request from 'superagent';
import { getGamesRequest, getGamesSuccess, getGamesFailed } from './../../../reducers/game';

export function getGames() {
    return (dipatch, getState) => {
        dipatch(getGamesRequest());
        const state = getState();
        const ownerId = state.auth.get('user').get('id');

        const game = JSON.stringify({
            userId: ownerId
        });
        return request
        .post('/api/getGames')
        .send(game)
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .end((err, response) => {
            if(response.status === 200) {
                dipatch(getGamesSuccess(response.body));
            } else {
                dipatch(getGamesFailed());
            }
        });
    };
}