import { getSurroundings } from './getSurroundings';
import { sort } from './objectsByNumericPropValues';

const shouldApplySameRuleLeftAndRight = (card, left, right) => shouldApplySameRule(
  card, left, right, 'left', 'right', 'right', 'left'
);

const shouldApplySameRuleAboveAndBelow = (card, above, below) => shouldApplySameRule(
    card, above, below, 'top', 'bottom', 'bottom', 'top'
);

const shouldApplySameRuleAboveAndLeft = (card, above, left) => shouldApplySameRule(
    card, above, left, 'top', 'left', 'bottom', 'right'
);

const shouldApplySameRuleBelowAndLeft = (card, below, left) => shouldApplySameRule(
    card, below, left, 'bottom', 'left', 'top', 'right'
);

const shouldApplySameRuleAboveAndRight = (card, above, right) => shouldApplySameRule(
    card, above, right, 'top', 'right', 'bottom', 'left'
);

const shouldApplySameRuleBelowAndRight = (card, below, right) => shouldApplySameRule(
    card, below, right, 'bottom', 'right', 'top', 'left'
);

const shouldApplySameRule = (card, firstCard, secondCard, d1, d2, d3, d4) => (
    firstCard
    && secondCard
    && firstCard.owner !== card.owner
    && secondCard.owner !== card.owner
    && card.rank[d1] === firstCard.rank[d3]
    && card.rank[d2] === secondCard.rank[d4]
);

export function sameRule(i, deck) {
    const { card, above, below, left, right } = getSurroundings(i, deck);

    let tuples = [];

    if(shouldApplySameRuleLeftAndRight(card, left.card, right.card)) {
        tuples.push({ index: left.index, owner: card.owner, flipDirection: 'flipped-left' });
        tuples.push({ index: right.index, owner: card.owner, flipDirection: 'flipped-right' });
    }

    if(shouldApplySameRuleAboveAndBelow(card, above.card, below.card)) {
        tuples.push({ index: above.index, owner: card.owner, flipDirection: 'flipped-up' });
        tuples.push({ index: below.index, owner: card.owner, flipDirection: 'flipped-down' });
    }

    if(shouldApplySameRuleAboveAndLeft(card, above.card, left.card)) {
        tuples.push({ index: above.index, owner: card.owner, flipDirection: 'flipped-up' });
        tuples.push({ index: left.index, owner: card.owner, flipDirection: 'flipped-left' });
    }

    if(shouldApplySameRuleBelowAndLeft(card, below.card, left.card)) {
        tuples.push({ index: below.index, owner: card.owner, flipDirection: 'flipped-down' });
        tuples.push({ index: left.index, owner: card.owner, flipDirection: 'flipped-left' });
    }

    if(shouldApplySameRuleAboveAndRight(card, above.card, right.card)) {
        tuples.push({ index: above.index, owner: card.owner, flipDirection: 'flipped-up' });
        tuples.push({ index: right.index, owner: card.owner, flipDirection: 'flipped-right' });
    }

    if(shouldApplySameRuleBelowAndRight(card, below.card, right.card)) {
        tuples.push({ index: below.index, owner: card.owner, flipDirection: 'flipped-down' });
        tuples.push({ index: right.index, owner: card.owner, flipDirection: 'flipped-right' });
    }

    return sort(tuples);
}