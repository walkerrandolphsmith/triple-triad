import { getAvailableDeck } from './getAvailableDeck';
import { sample } from './sample';

export function getRandomHand(game) {
    let deck = getAvailableDeck(game.deck, 1);
    let unOwnedCards = deck.filter(card => card.owner === 0);
    return sample(unOwnedCards, 5);
}