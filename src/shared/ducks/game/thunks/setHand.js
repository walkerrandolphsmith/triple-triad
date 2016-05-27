import { addCard, currentGameSelector } from './../index';
import { getRandomHand } from './../../../utils/getRandomHand';

export const setHand = (owner) => (dispatch, getState) => {
    const currentGame = currentGameSelector(getState());
    const randomHand = getRandomHand(currentGame);
    randomHand.forEach(card => {
        dispatch(addCard(card.id, owner));
    });
};