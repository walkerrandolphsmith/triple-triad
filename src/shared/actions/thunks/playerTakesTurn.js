import { aiTurn } from './aiTurn';
import { placeCard, selectCard, selectPiece } from './../action-creators';
import { getNextSelectedCard } from './getNextSelectedCard';
import { applyFlips } from './applyFlips';
import { updateRoute } from './updateRoute';

export const playerTakesTurn = (isPlayer) => (dispatch, getState) => {
    const state = getState();

    let gameOver = state.game.get('deck').filter(card => card.get('boardIndex') > -1).size === 8;

    dispatch(placeCard());
    dispatch(applyFlips());
    dispatch(selectCard(-1));
    dispatch(selectPiece(-1));

    if(isPlayer && !gameOver){
        dispatch(aiTurn());
        dispatch(getNextSelectedCard());
    }

};