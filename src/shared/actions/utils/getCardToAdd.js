import { getHand } from './../../selectors/handSelector';
import { getAvailableDeck } from './../../selectors/availableDeckSelector'

export function getCardToAdd(game, directionInLoop){

    const deck = getAvailableDeck(game.get('deck').toJS());
    const id = game.get('selectedCard');

    if(id === -1) return deck[0];

    const i = deck.findIndex(card => card.id === id);
    const amountToIncrement = directionInLoop === 'right' ? 1 : deck.length - 1;

    return deck[(i + amountToIncrement) % deck.length];
}