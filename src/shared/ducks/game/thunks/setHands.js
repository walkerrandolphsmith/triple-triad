import { setHand } from './setHand';

export const setHands = () => (dispatch, getState) => {
    const state = getState();

    if(state.settings.get('randomHand')) {
        dispatch(setHand(1));
    }
    dispatch(setHand(2));
};
