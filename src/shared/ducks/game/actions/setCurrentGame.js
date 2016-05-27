import { SET_CURRENT_GAME } from './../index';

export const setCurrentGame = id => ({
    type: SET_CURRENT_GAME,
    payload: {
        id: id
    }
});