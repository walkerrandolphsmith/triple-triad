import { setHands } from './../setHands/setHands';
import { getNextSelectedCard } from './../getNextSelectedCard/getNextSelectedCard';
import { getNextCardForHand } from './../getNextCardForHand/getNextCardForHand';
import { setPhase, resetGame } from './../../action-creators';
import { getNextPhase } from './../../utils/getNextPhase/getNextPhase';
import getCurrentGame from './../../utils/getCurrentGame';

export const endPhase = () => (dispatch, getState) => {
    const state = getState();
    const currentGame = getCurrentGame(state);
    const randomHand = state.settings.get('randomHand');
    const currentPhase = currentGame.get('phase');
    const nextPhase = getNextPhase(currentPhase, randomHand);
    
    if(currentPhase === 'cardSelection' || currentPhase === 'pieceSelection') {
        dispatch(resetGame());
    }

    if(nextPhase === 'handSelection') {
        dispatch(getNextCardForHand());
    }
    
    if(nextPhase === 'round') {
        dispatch(setPhase('cardSelection'));
        dispatch(setHands());
        dispatch(getNextSelectedCard());
        return;
    }

    dispatch(setPhase(nextPhase));
};


