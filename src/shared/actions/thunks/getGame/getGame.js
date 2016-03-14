import request from 'superagent';
import { getGameRequest, getGameSuccess, getGameFailed } from './../../action-creators';

export function getGame(id) {
    return (dispatch, getState) => {

        dispatch(getGameRequest());

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
                dispatch(getGameFailed());
            }
        });
    }
}