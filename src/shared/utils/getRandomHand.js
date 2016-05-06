import { getAvailableDeck } from './../reducers/game';
import { sample } from './sample';

export function getRandomHand(game) {
    let deck = getAvailableDeck(game.get('deck'), 1);
    let unOwnedCards = deck.filter(card => card.get('owner') === 0);
    return sample(unOwnedCards, 5);
}