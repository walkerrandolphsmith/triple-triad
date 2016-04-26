import { getValidPiece, selectCardForOpponent } from './../../utils';
import { selectCard, selectPiece, startAiTurn, endAiTurn } from './../../action-creators';
import { playerTakesTurn } from './../playerTakesTurn/playerTakesTurn';
import { currentGameSelector } from './../../../selectors/currentGame/currentGameSelector';

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
