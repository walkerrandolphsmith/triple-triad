import PHASE from './../../../constants/phases';
import { setPhase } from './../actions/setPhase';
import { selectNextCard } from './selectNextCard';
import { setHands } from './setHands';

export const endPhaseHold = () => (dispatch, getState) => {
    const state = getState();
    const randomHand = state.settings.get('randomHand');

    if(randomHand) {
        dispatch(setPhase(PHASE.CARD_SELECTION));
        dispatch(setHands());
        dispatch(selectNextCard('deck'));
    } else {
        dispatch(setPhase(PHASE.HAND_SELECTION));
        dispatch(selectNextCard('hand'));
    }
};