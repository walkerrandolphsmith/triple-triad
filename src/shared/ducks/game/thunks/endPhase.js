import PHASE from './../../../constants/phases';
import { currentGameSelector } from './../index';
import { setPhase } from './../actions/setPhase';
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

    if(willBePhaseHandSelection(nextPhase)) {
        dispatch(getNextCardForHand());
    }
    
    if(willBeCardSelectionRound(nextPhase)) {
        dispatch(setHands());
        dispatch(getNextSelectedCard());
    }

    dispatch(setPhase(nextPhase));
};

function willBePhaseHandSelection(nextPhase) {
    return nextPhase === PHASE.HAND_SELECTION
}

function willBeCardSelectionRound(nextPhase) {
    return nextPhase === PHASE.CARD_SELECTION
}

