import { aiTurn } from './../aiTurn/aiTurn';
import { placeCard, selectCard, selectPiece } from './../../action-creators';
import { getNextSelectedCard } from './../getNextSelectedCard/getNextSelectedCard';
import { applyFlips } from './../applyFlips/applyFlips';
import { getBoard } from './../../../selectors/board/boardSelector';
import getCurrentGame from './../../utils/getCurrentGame';

export const playerTakesTurn = (isPlayer) => (dispatch, getState) => {
    const currentGame = getCurrentGame(getState());

    dispatch(placeCard());

    //Wait for the socket to propagate the card placement
    setTimeout(() => {
        dispatch(applyFlips());
        dispatch(selectCard(-1));
        dispatch(selectPiece(-1));

        if(shouldAiTakeTurnAfterPlayer(currentGame, isPlayer)) {
            setTimeout(() => {
                dispatch(aiTurn());
                dispatch(getNextSelectedCard());
            });
        }
    }, 500);
};

function shouldAiTakeTurnAfterPlayer(currentGame, isPlayer) {
    let gameOver = getBoard(currentGame.get('deck')).size === 9;
    return isPlayer && !gameOver
}