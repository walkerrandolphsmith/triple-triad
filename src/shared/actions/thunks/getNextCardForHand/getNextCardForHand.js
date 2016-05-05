import { getCardToAdd } from './../../utils';
import { selectCard, currentGameSelector } from './../../../reducers/game';

export const getNextCardForHand = (directionInLoop) => (dispatch, getState) => {
    const currentGame = currentGameSelector(getState());
    const card = getCardToAdd(currentGame, directionInLoop);
    dispatch(selectCard(card.get('id')));
};