import { SHOW_CURRENT_PLAYER_MESSAGE } from './../index';

export const showCurrentPlayerMessage = currentPlayer => ({
    type: SHOW_CURRENT_PLAYER_MESSAGE,
    payload: {
        currentPlayer: currentPlayer
    }
});