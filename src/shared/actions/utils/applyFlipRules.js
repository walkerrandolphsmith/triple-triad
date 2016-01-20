import { basicRule } from './basicRule';
import { sameRule } from './sameRule';

export function applyFlipRules(i, game){
    const basic = basicRule(i, game);
    const same = sameRule(i, game);
    return basic.concat(same).reduce((indexes, index) => indexes.findIndex(i => i === index) < 0 ? indexes.concat(index) : indexes, []);
}