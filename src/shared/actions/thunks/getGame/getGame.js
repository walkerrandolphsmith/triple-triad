import request from 'superagent';
import { getGameSuccess } from './../../action-creators';

export function getGame(id) {
    return (dipatch, getState) => {
        const data = JSON.stringify({
            gameId: id
        });

        return request
        .post('/api/get_game')
        .send(data)
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .end((err, response) => {
            if(response.status === 200){
                dispatch(getGameSuccess(response.body))
            }else{

            }
        });
    }
}