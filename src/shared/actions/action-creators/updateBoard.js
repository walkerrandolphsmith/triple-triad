import { UPDATE_BOARD } from './../../constants/action-types';

export function updateBoard(index, owner){
    return {
        type: UPDATE_BOARD,
        payload: {
            index: index,
            owner: owner
        }
    }
}