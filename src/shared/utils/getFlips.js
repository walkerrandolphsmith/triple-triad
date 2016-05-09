import { basicRule } from './basicRule';
import { sameRule } from './sameRule';

export function getFlips(i, deck) {
    const basic = basicRule(i, deck);
    const same = sameRule(i, deck);
    return basic.concat(same).reduce((indexes, index) => indexes.findIndex(j => j === index) < 0 ? indexes.concat(index) : indexes, []);
}