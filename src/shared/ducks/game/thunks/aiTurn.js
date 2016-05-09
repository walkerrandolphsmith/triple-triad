import { completeTurn } from './completeTurn';
import { getNextSelectedCard } from './getNextSelectedCard';
import { endAiTurn } from './../actions/endAiTurn';
import { selectCard } from './../actions/selectCard';
import { startAiTurn } from './../actions/startAiTurn';
import { currentGameSelector } from './../selectors';
import { getValidPiece } from './../../../utils/getValidPiece';
import { selectCardForOpponent } from './../../../utils/selectCardForOpponent';

export const aiTurn = () => (dispatch, getState) => {
    dispatch(startAiTurn());

    let currentGame = currentGameSelector(getState());
    dispatch(selectCard(selectCardForOpponent(currentGame)));

    let piece = getValidPiece(currentGame);
    if(piece >= 0){
        dispatch(completeTurn(piece, false));
    }
    dispatch(getNextSelectedCard());
    dispatch(endAiTurn());
};