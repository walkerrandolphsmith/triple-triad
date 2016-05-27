import { getHand } from './getHand';
import { sample } from './sample';

export function selectCardForOpponent(game) {
    let opponentHand = getHand(game.deck, 2);
    let card = sample(opponentHand);
    return card.id;
}