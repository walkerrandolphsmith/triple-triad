import { getCardToAdd } from './../utils';
import { selectCard } from './../action-creators';

export const getNextCardForHand = (directionInLoop) => (dispatch, getState) => {
    const state = getState();

    const card = getCardToAdd(state.game, directionInLoop);

    dispatch(selectCard(card.get('id')));
};