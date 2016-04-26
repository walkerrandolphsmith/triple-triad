import { setPhase, selectPiece } from './../../action-creators';
import { playerTakesTurn } from './../playerTakesTurn/playerTakesTurn';
import PHASE from './../../../constants/phases';

export const selectedPieceByClick = index => dispatch => {
    dispatch(selectPiece(index));
    dispatch(playerTakesTurn(true));
    dispatch(setPhase(PHASE.CARD_SELECTION));
};