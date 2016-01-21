import { SELECT_PIECE } from './../../constants/actionTypes';

export function selectPiece(index) {
    return {
        type: SELECT_PIECE,
        payload: {
            index: index
        }
    }
}