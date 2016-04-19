import { getPieceToSelect } from './../../utils';
import { selectPiece } from './../../action-creators';
import getCurrentGame from './../../utils/getCurrentGame';

export const getNextSelectedPiece = (keyCode) => (dispatch, getState) => {
    const state = getState();
    const currentGame = getCurrentGame(state);
    const piece = getPieceToSelect(currentGame, keyCode);

    dispatch(selectPiece(piece));
};