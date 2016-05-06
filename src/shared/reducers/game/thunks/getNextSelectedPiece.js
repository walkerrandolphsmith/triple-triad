import { selectPiece, currentGameSelector } from './../index';
import { getPieceToSelect } from './../../../utils/getPieceToSelect';

export const getNextSelectedPiece = (keyCode) => (dispatch, getState) => {
    const currentGame = currentGameSelector(getState());
    const piece = getPieceToSelect(currentGame, keyCode);
    dispatch(selectPiece(piece));
};