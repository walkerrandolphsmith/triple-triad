import { SERVER, UPDATE_BOARD } from './../../../constants/actionTypes';

export function updateBoard(index, owner) {
    return {
        type: SERVER + UPDATE_BOARD,
        payload: {
            index: index,
            owner: owner
        }
    };
}