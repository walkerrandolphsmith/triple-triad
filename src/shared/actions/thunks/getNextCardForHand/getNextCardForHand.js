import { getCardToAdd } from './../../utils';
import getCurrentGame from './../../utils/getCurrentGame';
import { selectCard } from './../../action-creators';

export const getNextCardForHand = (directionInLoop) => (dispatch, getState) => {
    const state = getState();

    const currentGame = getCurrentGame(state);

    const card = getCardToAdd(currentGame, directionInLoop);

    dispatch(selectCard(card.get('id')));
};