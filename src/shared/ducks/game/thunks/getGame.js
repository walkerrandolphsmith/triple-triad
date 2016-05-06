import request from 'superagent';
import { getGameRequest, getGameSuccess, getGameFailure } from './../index';

export function getGame(id) {
    return dispatch => {
        dispatch(getGameRequest());

        const data = JSON.stringify({
            gameId: id
        });

        return request
        .post('/api/getGame')
        .send(data)
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .end((err, response) => {
            if(response.status === 200) {
                dispatch(getGameSuccess(response.body));
            } else {
                dispatch(getGameFailure());
            }
        });
    };
}