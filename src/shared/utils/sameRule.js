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

    let indexes = [];

    if(shouldApplySameRuleLeftAndRight(card, left.card, right.card)) {
        indexes = indexes.concat([right.index, left.index]);
    }

    if(shouldApplySameRuleAboveAndBelow(card, above.card, below.card)) {
        indexes = indexes.concat([above.index, below.index]);
    }

    if(shouldApplySameRuleAboveAndLeft(card, above.card, left.card)) {
        indexes = indexes.concat([above.index, left.index]);
    }

    if(shouldApplySameRuleBelowAndLeft(card, below.card, left.card)) {
        indexes = indexes.concat([below.index, left.index]);
    }

    if(shouldApplySameRuleAboveAndRight(card, above.card, right.card)) {
        indexes = indexes.concat([above.index, right.index]);
    }

    if(shouldApplySameRuleBelowAndRight(card, below.card, right.card)) {
        indexes = indexes.concat([below.index, right.index]);
    }

    let tuples = indexes.map(index => ({ index: index, owner: card.owner }));
    return sort(tuples);
}