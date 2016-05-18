import { SET_CURRENT_PLAYER } from './../index';

export const setCurrentPlayer = currentPlayer => ({
    type: SET_CURRENT_PLAYER,
    payload: {
        currentPlayer: currentPlayer
    }
});