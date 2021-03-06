import PHASE from './../../../constants/phases';
import { selectCard } from './../actions/selectCard';
import { selectPiece } from './../actions/selectPiece';
import { showCurrentPlayerMessage } from './../actions/showCurrentPlayerMessage';
import { setCurrentPlayer } from './../actions/setCurrentPlayer';
import { setPhase } from './../actions/setPhase';
import { placeCard } from './../actions/placeCard';
import { updateBoard } from './../actions/updateBoard';
import { aiTurn } from './aiTurn';
import { currentGameSelector } from './../selectors';
import { getBoard } from './../../../utils/getBoard';
import { getFlips } from './../../../utils/getFlips';

export const completeTurn = (indexOfPiece, isPlayer) => (dispatch, getState) => {
    if(indexOfPiece >= 0) {
        dispatch(selectPiece(indexOfPiece));
    }

    dispatch(placeCard());
    
    const currentGame = currentGameSelector(getState());
    const i = currentGame.selectedPiece;
    const deck = currentGame.deck;

    getFlips(i, deck).forEach(tuple => {
        dispatch(updateBoard(tuple.index, tuple.owner, tuple.flipDirection));
    });

    dispatch(selectCard(-1));
    dispatch(selectPiece(-1));

    dispatch(setPhase(PHASE.CARD_SELECTION));

    if(gameOver(currentGame)) {
        dispatch(setPhase(PHASE.GAME_OVER));
        return;
    }

    dispatch(showCurrentPlayerMessage(currentGame.currentPlayer));
    setTimeout(() => {
        dispatch(showCurrentPlayerMessage(''));
        let nextPlayer = getNextPlayer(currentGame);
        dispatch(setCurrentPlayer(nextPlayer));
        if(isPlayer) {
            dispatch(aiTurn());
        }
    }, 500);
};

function gameOver(currentGame) {
    return getBoard(currentGame.deck).size === 9;
}

const getNextPlayer = currentGame => {
    return currentGame.currentPlayer === currentGame.owner 
        ? currentGame.opponent : currentGame.owner;
};