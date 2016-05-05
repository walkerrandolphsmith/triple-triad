import PHASE from './../../../constants/phases';
import { playerTakesTurn } from './../playerTakesTurn/playerTakesTurn';
import { setPhase, selectPiece } from './../../../reducers/game';

export const selectedPieceByClick = index => dispatch => {
    dispatch(selectPiece(index));
    dispatch(playerTakesTurn(true));
    dispatch(setPhase(PHASE.CARD_SELECTION));
};