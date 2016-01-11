import { getPieceToSelect } from './../utils';
import { selectPiece } from './../action-creators';

export const getNextSelectedPiece = () => (dispatch, getState) => {
    const state = getState();

    const piece = getPieceToSelect(state.game);

    dispatch(selectPiece(piece));
};