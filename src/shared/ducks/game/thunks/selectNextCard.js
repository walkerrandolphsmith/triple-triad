import { selectCard, currentGameSelector } from './../index';
import { getAvailableDeck } from './../../../utils/getAvailableDeck';
import { getHand } from './../../../utils/getHand';
import { getCardToSelect } from './../../../utils/getCardToSelect';

export const selectNextCard = (selectFrom, directionInLoop) => (dispatch, getState) => {
    const currentGame = currentGameSelector(getState());
    let selectedCard = currentGame.selectedCard;

    let cardsToSelectFrom;
    if(selectFrom === 'hand') {
        cardsToSelectFrom = getAvailableDeck(currentGame.deck);
    } else {
        cardsToSelectFrom = getHand(currentGame.deck, 1);
    }
    const card = getCardToSelect(selectedCard, cardsToSelectFrom, directionInLoop);
    dispatch(selectCard(card.id));
};