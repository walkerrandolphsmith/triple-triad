import { getValidPiece, selectCardForOpponent } from './../../utils';
import { selectCard, selectPiece, startAiTurn, endAiTurn } from './../../action-creators'
import { playerTakesTurn } from './../playerTakesTurn/playerTakesTurn';

export const aiTurn = () => (dispatch, getState) => {
    dispatch(startAiTurn());

    const state = getState();

    let selectedCard = selectCardForOpponent(state.game);
    dispatch(selectCard(selectedCard));

    let piece = getValidPiece(state.game);
    if(piece >= 0) {
        dispatch(selectPiece(piece));
        dispatch(playerTakesTurn(false));
    }
    dispatch(endAiTurn());
};