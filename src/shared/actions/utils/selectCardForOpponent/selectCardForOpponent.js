import sample from './../sample';
import { getHand } from './../../../selectors/hand/handSelector';

export function selectCardForOpponent(game) {
    let opponentHand = getHand(game.get('deck'), 2);
    let card = sample(opponentHand);
    return card.get('id');
}