import { SET_OPPONENT } from './../index';

export const setOpponent = playerId => ({
    type: SET_OPPONENT,
    payload: {
        playerId: playerId
    }
});