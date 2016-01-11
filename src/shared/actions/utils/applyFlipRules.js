import _ from 'lodash';
import { basicRule } from './basicRule';
import { sameRule } from './sameRule';

export function applyFlipRules(i, game){
    const basic = basicRule(i, game);
    const same = sameRule(i, game);
    return _.union(basic, same);
}