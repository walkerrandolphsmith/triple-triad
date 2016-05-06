import { getHand } from './../reducers/game';
import { sample } from './sample';

export function selectCardForOpponent(game) {
    let opponentHand = getHand(game.get('deck'), 2);
    let card = sample(opponentHand);
    return card.get('id');
}