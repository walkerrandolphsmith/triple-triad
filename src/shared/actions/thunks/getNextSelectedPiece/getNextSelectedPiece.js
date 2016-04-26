import { getPieceToSelect } from './../../utils';
import { selectPiece } from './../../action-creators';
import { currentGameSelector } from './../../../selectors/currentGame/currentGameSelector';

export const getNextSelectedPiece = (keyCode) => (dispatch, getState) => {
    const currentGame = currentGameSelector(getState());
    const piece = getPieceToSelect(currentGame, keyCode);
    dispatch(selectPiece(piece));
};