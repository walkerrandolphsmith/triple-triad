import { getPieceToSelect } from './../../utils';
import { selectPiece, currentGameSelector } from './../../../reducers/game';

export const getNextSelectedPiece = (keyCode) => (dispatch, getState) => {
    const currentGame = currentGameSelector(getState());
    const piece = getPieceToSelect(currentGame, keyCode);
    dispatch(selectPiece(piece));
};