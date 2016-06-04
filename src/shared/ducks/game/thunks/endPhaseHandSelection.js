import PHASE from './../../../constants/phases';
import { setPhase } from './../actions/setPhase';
import { setHand } from './setHand';
import { currentGameSelector } from './../index';
import { getHand } from './../../../utils/getHand';
import { getIsFullHand } from './../../../utils/getIsFullHand';

export const endPhaseHandSelection = () => (dispatch, getState) => {
    const state = getState();
    const multiplayer = state.settings.get('mulitplayer');
    const currentGame = currentGameSelector(state);
    if(multiplayer) {
        const other = state.auth.get('user').id === currentGame.owner ? currentGame.opponent : currentGame.owner;
        const hand = getHand(currentGame.deck, other);
        if(getIsFullHand(hand)) {
            dispatch(setPhase(PHASE.CARD_SELECTION));
        } else {
            dispatch(setPhase(PHASE.HAND_SELECTION_HOLD));
        }
    } else {
        dispatch(setHand(currentGame.opponent));
        dispatch(setPhase(PHASE.CARD_SELECTION));
    }
};