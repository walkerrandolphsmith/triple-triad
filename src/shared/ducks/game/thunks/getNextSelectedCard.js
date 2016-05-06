import { selectCard, currentGameSelector } from './../index';
import { getCardToSelect } from './../../../utils/getCardToSelect';

export const getNextSelectedCard = (directionInLoop) => (dispatch, getState) => {
    const currentGame = currentGameSelector(getState());
    const card = getCardToSelect(currentGame, directionInLoop);
    dispatch(selectCard(card.get('id')));
};