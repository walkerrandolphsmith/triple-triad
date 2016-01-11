import { getCardToSelect } from './../utils';
import { selectCard } from './../action-creators';

export const getNextSelectedCard = (directionInLoop) => (dispatch, getState) => {
    const state = getState();

    const card = getCardToSelect(state.game, directionInLoop);

    dispatch(selectCard(card.id));
};