import { getAvailableDeck } from './../../../selectors/availableDeck/availableDeckSelector';
import { sample } from './../../utils';

export function getRandomHand(game) {
    let deck = getAvailableDeck(game.get('deck'), 1);
    let unOwnedCards = deck.filter(card => card.get('owner') === 0);
    return sample(unOwnedCards, 5);
}