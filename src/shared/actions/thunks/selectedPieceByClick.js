import { setPhase, selectPiece } from './../action-creators';
import { playerTakesTurn } from './playerTakesTurn';

export const selectedPieceByClick = (index) => (dispatch, getState) => {
    dispatch(selectPiece(index));
    dispatch(playerTakesTurn(true));
    dispatch(setPhase('cardSelection'));
};