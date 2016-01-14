import _ from 'lodash';
import { getAvailableDeck } from './../../selectors/availableDeckSelector';

export function getRandomHand(game) {
    let deck = getAvailableDeck(game.get('deck').toJS(), 1);
    let unOwnedCards = deck.filter(card => card.owner === 0);
    return _.sample(unOwnedCards, 5);
}