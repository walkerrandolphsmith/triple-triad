import { placeCard, selectCard, selectPiece, getBoard, currentGameSelector } from './../index';
import { aiTurn } from './aiTurn';
import { getNextSelectedCard } from './getNextSelectedCard';
import { applyFlips } from './applyFlips';

export const playerTakesTurn = (isPlayer) => (dispatch, getState) => {
    const currentGame = currentGameSelector(getState());

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