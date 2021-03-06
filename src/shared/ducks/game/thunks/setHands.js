import { setHand } from './setHand';
import { currentGameSelector } from './../index';

export const setHands = () => (dispatch, getState) => {
    const state = getState();
    const currentGame = currentGameSelector(state);
    if(currentGame.settings.randomHand) {
        dispatch(setHand(currentGame.owner));
    }
    dispatch(setHand(currentGame.opponent));
};
