import { getCardToSelect } from './../../utils';
import { selectCard, currentGameSelector } from './../../../reducers/game';

export const getNextSelectedCard = (directionInLoop) => (dispatch, getState) => {
    const currentGame = currentGameSelector(getState());
    const card = getCardToSelect(currentGame, directionInLoop);
    dispatch(selectCard(card.get('id')));
};