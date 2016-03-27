import { SERVER, SELECT_PIECE } from './../../../constants/actionTypes';

export function selectPiece(index) {
    return {
        type: SERVER + SELECT_PIECE,
        payload: {
            index: index
        }
    };
}