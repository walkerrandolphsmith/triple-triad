import PHASE from './../../../constants/phases';
import { setPhase } from './../actions/setPhase';

export const endPhaseSettingsSelection = () => (dispatch, getState) => {
    dispatch(setPhase(PHASE.INVITE));
};