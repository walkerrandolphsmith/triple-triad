import { UPDATE_BOARD } from './../index';

export const updateBoard = (index, owner) => ({
    type: UPDATE_BOARD,
    payload: {
        index: index,
        owner: owner
    }
});