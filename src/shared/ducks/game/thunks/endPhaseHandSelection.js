import PHASE from './../../../constants/phases';
import { setPhase } from './../actions/setPhase';
import { setHand } from './setHand';
import { currentGameSelector } from './../index';

export const endPhaseHandSelection = () => (dispatch, getState) => {
    const state = getState();
    const multiplayer = state.settings.get('mulitplayer');
    if(multiplayer) {
        //if logged in user is owner
            //dispatch(setPhase(PHASE.HOLD));
        //else logged in user is opponent
            //dispatch(setPhase(PHASE.CARD_SELECTION);
    } else {
        const currentGame = currentGameSelector(state);
        dispatch(setHand(currentGame.opponent));
        dispatch(setPhase(PHASE.CARD_SELECTION));
    }
};