import { RECEIVE_NEW_GAME } from './../../../../constants/actionTypes';

export function receiveNewGame(game) {
    return {
        type: RECEIVE_NEW_GAME,
        payload: {
            game: game
        }
    }
}
