import { getRandomHand } from './../../utils';
import { addCard } from './../../action-creators';
import { currentGameSelector } from './../../../selectors/currentGame/currentGameSelector';

export const setHand = (owner) => (dispatch, getState) => {
    const currentGame = currentGameSelector(getState());
    const randomHand = getRandomHand(currentGame);
    randomHand.forEach(card => {
        dispatch(addCard(card.get('id'), owner));
    });
};