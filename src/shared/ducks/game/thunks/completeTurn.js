import PHASE from './../../../constants/phases';
import { selectCard } from './../actions/selectCard';
import { selectPiece } from './../actions/selectPiece';
import { setPhase } from './../actions/setPhase';
import { placeCard } from './../actions/placeCard';
import { applyFlips } from './applyFlips';
import { aiTurn } from './aiTurn';
import { currentGameSelector } from './../selectors';
import { getBoard } from './../../../utils/getBoard';

export const completeTurn = (indexOfPiece, isPlayer) => (dispatch, getState) => {
    let currentGame = currentGameSelector(getState());

    if(indexOfPiece >= 0) {
        dispatch(selectPiece(indexOfPiece));
    }

    dispatch(placeCard());

    setTimeout(() => {
        dispatch(applyFlips());
        dispatch(selectCard(-1));
        dispatch(selectPiece(-1));

        if(shouldAiTakeTurnAfterPlayer(currentGame, isPlayer)) {
            setTimeout(() => {
                dispatch(aiTurn());
            });
        }
    }, 500);

    dispatch(setPhase(PHASE.CARD_SELECTION));
};

function shouldAiTakeTurnAfterPlayer(currentGame, isPlayer) {
    let gameOver = getBoard(currentGame.get('deck')).size === 9;
    return isPlayer && !gameOver
}