import { getSurroundings } from './getSurroundings';
import { sort } from './objectsByNumericPropValues';

const shouldApplyBasicRuleAbove = (card, aboveCard) => shouldApplyBasicRule(
    card, aboveCard, 'top', 'bottom'
);

const shouldApplyBasicRuleBelow = (card, belowCard) => shouldApplyBasicRule(
    card, belowCard, 'bottom', 'top'
);

const shouldApplyBasicRuleLeft = (card, leftCard) => shouldApplyBasicRule(
    card, leftCard, 'left', 'right'
);

const shouldApplyBasicRuleRight = (card, rightCard) => shouldApplyBasicRule(
    card, rightCard, 'right', 'left'
);

const shouldApplyBasicRule = (card, otherCard, attackDirection, defenseDirection) => (
    card
    && otherCard
    && card.owner !== otherCard.owner
    && card.rank[attackDirection] > otherCard.rank[defenseDirection]
);

export function basicRule(i, deck) {
    const { card, above, below, left, right } = getSurroundings(i, deck);

    let owner = card.owner;

    let tuples = [];

    if(!card) {
        return tuples;
    }

    if(shouldApplyBasicRuleAbove(card, above.card)) {
        tuples.push({ index: above.index, owner: owner });
    }
    if(shouldApplyBasicRuleBelow(card, below.card)) {
        tuples.push({ index: below.index, owner: owner });
    }
    if(shouldApplyBasicRuleLeft(card, left.card)) {
        tuples.push({ index: left.index, owner: owner });
    }
    if(shouldApplyBasicRuleRight(card, right.card)) {
        tuples.push({ index: right.index, owner: owner });
    }
    return sort(tuples);
}
