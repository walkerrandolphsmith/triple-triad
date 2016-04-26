import { getCardToAdd } from './../../utils';
import { selectCard } from './../../action-creators';
import { currentGameSelector } from './../../../selectors/currentGame/currentGameSelector';

export const getNextCardForHand = (directionInLoop) => (dispatch, getState) => {
    const currentGame = currentGameSelector(getState());
    const card = getCardToAdd(currentGame, directionInLoop);
    dispatch(selectCard(card.get('id')));
};