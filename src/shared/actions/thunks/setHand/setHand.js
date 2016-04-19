import { getRandomHand } from './../../utils';
import { addCard } from './../../action-creators';
import getCurrentGame from './../../utils/getCurrentGame';

export const setHand = (owner) => (dispatch, getState) => {
    const state = getState();
    const currentGame = getCurrentGame(state);
    const randomHand = getRandomHand(currentGame);
    randomHand.forEach(card => {
        dispatch(addCard(card.get('id'), owner));
    });
};