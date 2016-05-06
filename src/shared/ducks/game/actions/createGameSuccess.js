import { CREATE_GAME_SUCCESS } from './../index';
export const createGameSuccess = game => ({
    type: CREATE_GAME_SUCCESS,
    payload: {
        game: game
    }
});
