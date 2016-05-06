import request from 'superagent';
import { deleteGameRequest, deleteGameSuccess, deleteGameFailure } from './../index';

export const deleteGame = id => dispatch => {
    dispatch(deleteGameRequest());
    return request
        .post('/api/deleteGame')
        .send(JSON.stringify({ gameId: id }))
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .end((err, response) => {
            if(response.status === 200) {
                dispatch(deleteGameSuccess(id));
            } else {
                dispatch(deleteGameFailure());
            }
        });
};