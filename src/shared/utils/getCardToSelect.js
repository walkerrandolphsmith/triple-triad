import { getHand } from '../ducks/game';

export function getCardToSelect(game, directionInLoop) {
    const hand = getHand(game.get('deck'), 1);
    const id = game.get('selectedCard');

    if(id === -1) {
        return hand.get(0);
    }

    const i = hand.findIndex(card => card.get('id') === id);
    const amountToIncrement = directionInLoop === 'down' ? 1 : hand.size - 1;

    return hand.get((i + amountToIncrement) % hand.size);
}