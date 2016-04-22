import { getCardToAdd } from './../../utils';
import getCurrentGame from './../../utils/getCurrentGame';
import { selectCard } from './../../action-creators';

export const getNextCardForHand = (directionInLoop) => (dispatch, getState) => {
    const currentGame = getCurrentGame(getState());
    const card = getCardToAdd(currentGame, directionInLoop);
    dispatch(selectCard(card.get('id')));
};