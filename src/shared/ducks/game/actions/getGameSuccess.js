import { GET_GAME_SUCCESS } from './../index';
export const getGameSuccess = game => ({
    type: GET_GAME_SUCCESS,
    payload: {
        game: game
    }
});