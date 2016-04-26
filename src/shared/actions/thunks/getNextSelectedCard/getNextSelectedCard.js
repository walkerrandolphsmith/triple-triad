import { getCardToSelect } from './../../utils';
import { selectCard } from './../../action-creators';
import { currentGameSelector } from './../../../selectors/currentGame/currentGameSelector';

export const getNextSelectedCard = (directionInLoop) => (dispatch, getState) => {
    const currentGame = currentGameSelector(getState());
    const card = getCardToSelect(currentGame, directionInLoop);
    dispatch(selectCard(card.get('id')));
};