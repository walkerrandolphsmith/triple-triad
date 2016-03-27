import { setPhase, selectPiece } from './../../action-creators';
import { playerTakesTurn } from './../playerTakesTurn/playerTakesTurn';

export const selectedPieceByClick = index => dispatch => {
    dispatch(selectPiece(index));
    dispatch(playerTakesTurn(true));
    dispatch(setPhase('cardSelection'));
};