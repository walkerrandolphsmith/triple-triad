import { SELECT_PIECE } from './../../constants/action-types';

export function selectPiece(index) {
    return {
        type: SELECT_PIECE,
        payload: {
            index: index
        }
    }
}