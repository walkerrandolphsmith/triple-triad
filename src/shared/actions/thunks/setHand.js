import { getCardsToAdd } from './../utils';
import { addCard } from './../action-creators';

export const setHand = (owner) => (dispatch, getState) => {
    const state = getState();
    let randomHand = getCardsToAdd(state.game);
    randomHand.forEach(card => {
        dispatch(addCard(card.id, owner))
    });
};