import { aiTurn } from './aiTurn';
import { placeCard, selectCard, selectPiece } from './../action-creators';
import { getNextSelectedCard } from './getNextSelectedCard';
import { applyFlips } from './applyFlips';

export const playerTakesTurn = (isPlayer) => (dispatch, getState) => {
    const state = getState();

    dispatch(placeCard());
    dispatch(applyFlips());
    dispatch(selectCard(-1));
    dispatch(selectPiece(-1));

    if(isPlayer){
        dispatch(aiTurn());
        dispatch(getNextSelectedCard());
    }
};