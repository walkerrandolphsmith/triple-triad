import { basicRule } from './../basicRule/basicRule';
import { sameRule } from './../sameRule/sameRule';

export function applyFlipRules(i, deck) {
    const basic = basicRule(i, deck);
    const same = sameRule(i, deck);
    return basic.concat(same).reduce((indexes, index) => indexes.findIndex(j => j === index) < 0 ? indexes.concat(index) : indexes, []);
}