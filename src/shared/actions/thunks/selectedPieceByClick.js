import { playerTakesTurn } from './playerTakesTurn';
import { selectPiece } from './../action-creators';

export const selectedPieceByClick = (index) => (dispatch, getState) => {
    dispatch(selectPiece(index));
    dispatch(playerTakesTurn(true));
};