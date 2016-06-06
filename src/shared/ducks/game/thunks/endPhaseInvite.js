import PHASE from './../../../constants/phases';
import { setPhase } from './../actions/setPhase';
import { selectNextCard } from './selectNextCard';
import { setHands } from './setHands';
import { currentGameSelector } from './../index';

export const endPhaseInvite = () => (dispatch, getState) => {
    const state = getState();
    const { randomHand, multiplayer } = currentGameSelector(state).settings;

    if(multiplayer) {
        dispatch(setPhase(PHASE.INVITATION_HOLD));
    } else if(randomHand) {
        dispatch(setPhase(PHASE.CARD_SELECTION));
        dispatch(setHands());
        dispatch(selectNextCard('deck'));
    } else {
        dispatch(setPhase(PHASE.HAND_SELECTION));
        dispatch(selectNextCard('hand'));
    }
};