import PHASE from './../../../constants/phases';
import { setPhase, resetGame, currentGameSelector } from './../index';
import { setHands } from './setHands';
import { getNextSelectedCard } from './getNextSelectedCard';
import { getNextCardForHand } from './getNextCardForHand';
import { getNextPhase } from './../../../utils/getNextPhase';

export const endPhase = () => (dispatch, getState) => {
    const state = getState();
    const currentGame = currentGameSelector(state);
    const randomHand = state.settings.get('randomHand');
    const currentPhase = currentGame.get('phase');
    const nextPhase = getNextPhase(currentPhase, randomHand);
    
    if(isRollupPhaseRound(currentPhase)) {
        dispatch(resetGame());
    }

    if(willBePhaseHandSelection(nextPhase)) {
        dispatch(getNextCardForHand());
    }
    
    if(willBePhaseRound(nextPhase)) {
        //doesn't will be phase x imply the phase will be x and not cardSelection
        //This mess is probably why I have to return early
        //How did I ever get in this mess? smelly aye?
        dispatch(setPhase(PHASE.CARD_SELECTION));
        dispatch(setHands());
        dispatch(getNextSelectedCard());
        return;
    }

    dispatch(setPhase(nextPhase));
};

function willBePhaseHandSelection(nextPhase) {
    return nextPhase === PHASE.HAND_SELECTION
}

function willBePhaseRound(nextPhase) {
    return nextPhase === 'round'
}

function isRollupPhaseRound(currentPhase) {
    return currentPhase === PHASE.CARD_SELECTION || currentPhase === PHASE.PIECE_SELECTION
}


