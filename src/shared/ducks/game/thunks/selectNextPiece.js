import { selectPiece, currentGameSelector } from './../index';
import { getPieceToSelect } from './../../../utils/getPieceToSelect';

export const selectNextPiece = (keyCode) => (dispatch, getState) => {
    const currentGame = currentGameSelector(getState());
    const piece = getPieceToSelect(currentGame, keyCode);
    dispatch(selectPiece(piece));
};