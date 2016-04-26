import { setHands } from './../setHands/setHands';
import { getNextSelectedCard } from './../getNextSelectedCard/getNextSelectedCard';
import { getNextCardForHand } from './../getNextCardForHand/getNextCardForHand';
import { setPhase, resetGame } from './../../action-creators';
import { getNextPhase } from './../../utils/getNextPhase/getNextPhase';
import { currentGameSelector } from './../../../selectors/currentGame/currentGameSelector';
import PHASE from './../../../constants/phases';


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


