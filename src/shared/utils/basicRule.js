import { getBoard } from './getBoard';
import { sort } from './objectsByNumericPropValues';

function shouldFLip(card, otherCard, attackDirection, defenseDirection) {
    return (
        card
        && otherCard
        && card.owner !== otherCard.owner
        && card.rank[attackDirection] > otherCard.rank[defenseDirection]
    );
}

export function basicRule(i, deck) {
    const board = getBoard(deck);

    const row = i / 3;
    const column = i % 3;

    const card = board.filter(c => c && c.boardIndex === i).get(0);

    const above = i - 3;
    const below = i + 3;
    const left = i - 1;
    const right = i + 1;

    const isNotFirstRow = row > 0;
    const isNotLastRow = row < 2;
    const isNotFirstColumn = column > 0;
    const isNotLastColumn = column < 2;

    const cardAbove = isNotFirstRow ? board.filter(ca => ca.boardIndex === above).get(0) : null;
    const cardBelow = isNotLastRow ? board.filter(cb => cb.boardIndex === below).get(0) : null;
    const cardAtLeft = isNotFirstColumn ? board.filter(cl => cl.boardIndex === left).get(0) : null;
    const cardAtRight = isNotLastColumn ? board.filter(cr => cr.boardIndex === right).get(0) : null;

    let owner = card.owner;
    let other = owner === 1 ? 2 : 1;

    let tuples = [];

    if(shouldFLip(card, cardAbove, 'top', 'bottom')) {
        tuples.push({ index: above, owner: card.owner });
    }
    if(shouldFLip(card, cardBelow, 'bottom', 'top')) {
        tuples.push({ index: below, owner: card.owner });
    }
    if(shouldFLip(card, cardAtLeft, 'left', 'right')) {
        tuples.push({ index: left, owner: card.owner });
    }
    if(shouldFLip(card, cardAtRight, 'right', 'left')) {
        tuples.push({ index: right, owner: card.owner });
    }
    tuples = sort(tuples);

    if(shouldFLip(cardAbove, card, 'bottom', 'top')
        || shouldFLip(cardBelow, card, 'top', 'bottom')
        || shouldFLip(cardAtLeft, card, 'right', 'left')
        || shouldFLip(cardAtRight, card, 'left', 'right')
    ) {
        tuples.push({ index: i, owner: other });
    }
    return tuples;
}
