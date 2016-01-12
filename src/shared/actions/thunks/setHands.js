import { getNextSelectedCard } from './getNextSelectedCard';
import { setHand } from './setHand';

export const setHands = () => (dispatch, getState) => {
    const state = getState();

    let randomHand = state.settings.get('randomHand');

    if(randomHand) {
        dispatch(setHand(1));
        dispatch(getNextSelectedCard());
    }
    dispatch(setHand(2));
};
