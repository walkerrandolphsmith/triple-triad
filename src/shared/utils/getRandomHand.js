import { getAvailableDeck } from './getAvailableDeck';
import { sample } from './sample';

export const getRandomHand = game => {
    let deck = getAvailableDeck(game.deck, game.owner);
    let unOwnedCards = deck.filter(card => card.owner === 0);
    return sample(unOwnedCards, 5);
};