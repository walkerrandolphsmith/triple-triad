import { aiTurn } from './../aiTurn/aiTurn';
import { placeCard, selectCard, selectPiece } from './../../action-creators';
import { getNextSelectedCard } from './../getNextSelectedCard/getNextSelectedCard';
import { applyFlips } from './../applyFlips/applyFlips';
import { getBoard } from './../../../selectors/board/boardSelector';

export const playerTakesTurn = (isPlayer) => (dispatch, getState) => {
    const state = getState();

    let gameOver = getBoard(state.game.get('deck')).size === 9;

    dispatch(placeCard());
    dispatch(applyFlips());
    dispatch(selectCard(-1));
    dispatch(selectPiece(-1));

    if(isPlayer && !gameOver) {
        setTimeout(() => {
            dispatch(aiTurn());
            dispatch(getNextSelectedCard());
        });
    }
};