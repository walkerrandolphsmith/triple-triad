import { getAvailableDeck } from '../ducks/game';

export function getCardToAdd(game, directionInLoop) {
    const deck = getAvailableDeck(game.get('deck'));
    const id = game.get('selectedCard');

    if(id === -1) {
        return deck.get(0);
    }

    const i = deck.findIndex(card => card.get('id') === id);
    const amountToIncrement = directionInLoop === 'right' ? 1 : deck.size - 1;

    return deck.get((i + amountToIncrement) % deck.size);
}