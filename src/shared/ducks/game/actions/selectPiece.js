import { SELECT_PIECE } from './../index';

export const selectPiece = index => ({
    type: SELECT_PIECE,
    payload: {
        index: index
    }
});