import _ from 'lodash';
import { getHand } from './../../selectors/handSelector';

export function selectCardForOpponent(game){
    let opponentHand = getHand(game.get('deck').toJS(), 2);
    let card = _.sample(opponentHand);
    return card.id;
}