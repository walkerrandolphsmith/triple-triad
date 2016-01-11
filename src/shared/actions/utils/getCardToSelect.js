import { getHand } from './../../selectors/handSelector';

export function getCardToSelect(game, directionInLoop){

    const hand = getHand(game.get('deck').toJS(), 1);
    const id = game.get('selectedCard');

    if(id === -1) return hand[0];

    const i = hand.findIndex(card => card.id === id);
    const amountToIncrement = directionInLoop === 'down' ? 1 : hand.length - 1;

    return hand[(i + amountToIncrement) % hand.length];
}