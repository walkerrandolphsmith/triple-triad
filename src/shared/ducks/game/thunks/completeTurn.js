import PHASE from './../../../constants/phases';
import { selectCard } from './../actions/selectCard';
import { selectPiece } from './../actions/selectPiece';
import { setPhase } from './../actions/setPhase';
import { placeCard } from './../actions/placeCard';
import { updateBoard } from './../actions/updateBoard';
import { aiTurn } from './aiTurn';
import { currentGameSelector } from './../selectors';
import { getBoard } from './../../../utils/getBoard';
import { getFlips } from './../../../utils/getFlips';

export const completeTurn = (indexOfPiece, isPlayer) => (dispatch, getState) => {
    let currentGame = currentGameSelector(getState());

    if(indexOfPiece >= 0) {
        dispatch(selectPiece(indexOfPiece));
    }

    dispatch(placeCard());
    
    setTimeout(() => {
        currentGame = currentGameSelector(getState());
        const i = currentGame.get('selectedPiece');
        const deck = currentGame.get('deck');

        getFlips(i, deck).forEach(tuple => {
            dispatch(updateBoard(tuple.index, tuple.owner));
        });

        dispatch(selectCard(-1));
        dispatch(selectPiece(-1));

        if(gameOver(currentGame)) {
            dispatch(setPhase(PHASE.GAME_OVER));
        } else if(isPlayer) {
            setTimeout(() => { dispatch(aiTurn()); });
        }
    }, 500);

    dispatch(setPhase(PHASE.CARD_SELECTION));
};

function gameOver(currentGame) {
    return getBoard(currentGame.get('deck')).size === 9;
}

function shouldAiTakeTurnAfterPlayer(currentGame, isPlayer) {
    let gameOver = getBoard(currentGame.get('deck')).size === 9;
    return isPlayer && !gameOver
}