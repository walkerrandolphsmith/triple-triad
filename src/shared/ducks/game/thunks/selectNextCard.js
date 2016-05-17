import { selectCard, currentGameSelector } from './../index';
import { getAvailableDeck } from './../../../utils/getAvailableDeck';
import { getHand } from './../../../utils/getHand';
import { getCardToSelect } from './../../../utils/getCardToSelect';

export const selectNextCard = (selectFrom, directionInLoop) => (dispatch, getState) => {
    const currentGame = currentGameSelector(getState());
    let selectedCard = currentGame.get('selectedCard');

    let cardsToSelectFrom;
    if(selectFrom === 'hand') {
        cardsToSelectFrom = getAvailableDeck(currentGame.get('deck'));
    } else {
        cardsToSelectFrom = getHand(currentGame.get('deck'), 1);
    }
    const card = getCardToSelect(selectedCard, cardsToSelectFrom, directionInLoop);
    dispatch(selectCard(card.get('id')));
};