import PHASE from './../../../constants/phases';
import { setPhase } from './../actions/setPhase';
import { setHand } from './setHand';

export const endPhaseHandSelection = () => (dispatch, getState) => {
    const multiplayer = getState().settings.get('mulitplayer');
    if(multiplayer) {
        //if logged in user is owner
            //dispatch(setPhase(PHASE.HOLD));
        //else logged in user is opponent
            //dispatch(setPhase(PHASE.CARD_SELECTION);
    } else {
        dispatch(setHand(2));
        dispatch(setPhase(PHASE.CARD_SELECTION));
    }
};