import { CREATE_GAME_SUCCESS } from './../../../../constants/actionTypes';

export function createGameSuccess(game) {
    return {
        type: CREATE_GAME_SUCCESS,
        payload: {
            game: game
        }
    }
}
