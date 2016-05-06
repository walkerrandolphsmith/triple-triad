import { selectCard, currentGameSelector } from './../index';
import { getCardToAdd } from './../../../utils/getCardToAdd';

export const getNextCardForHand = (directionInLoop) => (dispatch, getState) => {
    const currentGame = currentGameSelector(getState());
    const card = getCardToAdd(currentGame, directionInLoop);
    dispatch(selectCard(card.get('id')));
};