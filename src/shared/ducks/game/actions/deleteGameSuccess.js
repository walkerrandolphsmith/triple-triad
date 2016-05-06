import { DELETE_GAME_SUCCESS } from './../index';
export const deleteGameSuccess = id => ({
    type: DELETE_GAME_SUCCESS,
    payload: {
        gameId: id
    }
});