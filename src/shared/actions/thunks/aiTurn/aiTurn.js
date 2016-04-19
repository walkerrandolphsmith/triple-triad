import { getValidPiece, selectCardForOpponent } from './../../utils';
import { selectCard, selectPiece, startAiTurn, endAiTurn } from './../../action-creators';
import { playerTakesTurn } from './../playerTakesTurn/playerTakesTurn';
import getCurrentGame from './../../utils/getCurrentGame';

export const aiTurn = () => (dispatch, getState) => {
    dispatch(startAiTurn());

    let state = getState();
    let currentGame = getCurrentGame(state);

    let selectedCard = selectCardForOpponent(currentGame);
    dispatch(selectCard(selectedCard));

    state = getState();
    currentGame = getCurrentGame(state);

    let piece = getValidPiece(currentGame);
    if(piece >= 0) {
        dispatch(selectPiece(piece));
        dispatch(playerTakesTurn(false));
    }
    dispatch(endAiTurn());
};