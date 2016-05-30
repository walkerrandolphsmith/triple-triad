import PHASE from './../../../constants/phases';
import { currentGameSelector } from './../index';
import { setPhase } from './../actions/setPhase';
import { setHands } from './setHands';
import { selectNextCard } from './selectNextCard';
import { getNextPhase } from './../../../utils/getNextPhase';

export const endPhase = () => (dispatch, getState) => {
    const state = getState();
    const currentGame = currentGameSelector(state);
    const randomHand = state.settings.get('randomHand');
    const multiplayer = state.settings.get('multiplayer');
    const currentPhase = currentGame.phase;
    const nextPhase = getNextPhase(currentPhase, { randomHand, multiplayer });

    if(willBePhaseHandSelection(nextPhase)) {
        dispatch(selectNextCard('hand'));
    }
    
    if(willBeCardSelectionRound(nextPhase)) {
        dispatch(setHands());
        dispatch(selectNextCard('deck'));
    }

    dispatch(setPhase(nextPhase));
};

function willBePhaseHandSelection(nextPhase) {
    return nextPhase === PHASE.HAND_SELECTION
}

function willBeCardSelectionRound(nextPhase) {
    return nextPhase === PHASE.CARD_SELECTION
}

