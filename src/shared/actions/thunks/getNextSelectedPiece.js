import { getPieceToSelect } from './../utils';
import { selectPiece } from './../action-creators';

export const getNextSelectedPiece = (keyCode) => (dispatch, getState) => {
    const state = getState();

    const piece = getPieceToSelect(state.game, keyCode);

    dispatch(selectPiece(piece));
};