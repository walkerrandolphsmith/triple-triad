import { getRandomHand } from './../../utils';
import { addCard, currentGameSelector } from './../../../reducers/game';

export const setHand = (owner) => (dispatch, getState) => {
    const currentGame = currentGameSelector(getState());
    const randomHand = getRandomHand(currentGame);
    randomHand.forEach(card => {
        dispatch(addCard(card.get('id'), owner));
    });
};