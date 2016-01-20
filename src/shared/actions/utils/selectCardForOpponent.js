import sample from './sample';
import { getHand } from './../../selectors/handSelector';

export function selectCardForOpponent(game){
    let opponentHand = getHand(game.get('deck').toJS(), 2);
    let card = sample(opponentHand);
    return card.id;
}