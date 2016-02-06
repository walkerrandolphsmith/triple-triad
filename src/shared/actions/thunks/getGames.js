import request from 'superagent';
import { requestGames, receiveGames, getGamesFailed } from './../../actions/action-creators';

export function getGames() {
    return (dipatch, getState) => {
        dipatch(requestGames());
        const state = getState();
        const ownerId = state.auth.get('user').get('id');

        const game = JSON.stringify({
            userId: ownerId
        });
        return request
        .post('/api/get_games')
        .send(game)
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .end((err, response) => {
            if(response.status === 200){
                dipatch(receiveGames(response.body));
            }else{
                dipatch(getGamesFailed());
            }
        });
    }
}