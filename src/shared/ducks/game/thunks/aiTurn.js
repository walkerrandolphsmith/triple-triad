import { selectCard, selectPiece, startAiTurn, endAiTurn, currentGameSelector } from './../index';
import { playerTakesTurn } from './playerTakesTurn';
import { getValidPiece } from './../../../utils/getValidPiece';
import { selectCardForOpponent } from './../../../utils/selectCardForOpponent';

export const aiTurn = () => (dispatch, getState) => {
    dispatch(startAiTurn());
    let currentGame = currentGameSelector(getState());
    dispatch(selectCard(selectCardForOpponent(currentGame)));

    let piece = getValidPiece(currentGame);

    if(isPieceValid(piece)) {
        takeAiTurn(piece, dispatch);
    }
    dispatch(endAiTurn());
};

function isPieceValid(piece) {
    return piece >= 0;
}

function takeAiTurn(piece, dispatch) {
    dispatch(selectPiece(piece));
    dispatch(playerTakesTurn(false));
}
