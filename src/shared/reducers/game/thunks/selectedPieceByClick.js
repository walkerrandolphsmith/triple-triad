import PHASE from './../../../constants/phases';
import { setPhase, selectPiece } from './../index';
import { playerTakesTurn } from './playerTakesTurn';

export const selectedPieceByClick = index => dispatch => {
    dispatch(selectPiece(index));
    dispatch(playerTakesTurn(true));
    dispatch(setPhase(PHASE.CARD_SELECTION));
};