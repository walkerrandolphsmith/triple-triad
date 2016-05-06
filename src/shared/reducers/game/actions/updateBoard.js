import SERVER from './../../../constants/socketActionPrefix';
import { UPDATE_BOARD } from './../index';
export const updateBoard = (index, owner) => ({
    type: SERVER + UPDATE_BOARD,
    payload: {
        index: index,
        owner: owner
    }
});