import { getValidPiece, selectCardForOpponent } from './../../utils';
import { selectCard, selectPiece, startAiTurn, endAiTurn } from './../../action-creators';
import { playerTakesTurn } from './../playerTakesTurn/playerTakesTurn';
import getCurrentGame from './../../utils/getCurrentGame';

export const aiTurn = () => (dispatch, getState) => {
    dispatch(startAiTurn());
    dispatch(selectCard(getSelectedCard(getState)));

    let piece = getPiece(getState);

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

function getSelectedCard(getState) {
    let currentGame = getCurrentGame(getState());
    return selectCardForOpponent(currentGame);
}

function getPiece(getState) {
    let currentGame = getCurrentGame(getState());
    return getValidPiece(currentGame);
}

