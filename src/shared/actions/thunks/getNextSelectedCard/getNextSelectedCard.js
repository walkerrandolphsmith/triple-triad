import { getCardToSelect } from './../../utils';
import { selectCard } from './../../action-creators';
import getCurrentGame from './../../utils/getCurrentGame';

export const getNextSelectedCard = (directionInLoop) => (dispatch, getState) => {
    const currentGame = getCurrentGame(getState());
    const card = getCardToSelect(currentGame, directionInLoop);
    dispatch(selectCard(card.get('id')));
};