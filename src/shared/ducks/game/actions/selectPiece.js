import SERVER from './../../../constants/socketActionPrefix';
import { SELECT_PIECE } from './../index';
export const selectPiece = index => ({
    type: SERVER + SELECT_PIECE,
    payload: {
        index: index
    }
});