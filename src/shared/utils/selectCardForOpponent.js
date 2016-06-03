import { getHand } from './getHand';
import { sample } from './sample';

export const selectCardForOpponent = game => {
    let opponentHand = getHand(game.deck, game.opponent);
    let card = sample(opponentHand);
    return card.id;
};