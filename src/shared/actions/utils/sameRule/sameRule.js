import { getBoard } from './../../../selectors/board/boardSelector';
import sort from './../sort/objectsByNumericPropValues';

function shouldApplySameRule(card, firstCard, secondCard, d1, d2, d3, d4) {
    return (
        firstCard
        && secondCard
        && firstCard.get('owner') !== card.get('owner')
        && secondCard.get('owner') !== card.get('owner')
        && card.get('rank').get(d1) === firstCard.get('rank').get(d3)
        && card.get('rank').get(d2) === secondCard.get('rank').get(d4)
    );
}

export function sameRule(i, deck) {
    const board = getBoard(deck);

    const row = i / 3;
    const column = i % 3;

    const card = board.filter(c => c && c.get('boardIndex') === i).get(0);

    const above = i - 3;
    const below = i + 3;
    const left = i - 1;
    const right = i + 1;

    const isNotFirstRow = row > 0;
    const isNotLastRow = row < 2;
    const isNotFirstColumn = column > 0;
    const isNotLastColumn = column < 2;

    const cardAbove = isNotFirstRow ? board.filter(ca => ca.get('boardIndex') === above).get(0) : null;
    const cardBelow = isNotLastRow ? board.filter(cb => cb.get('boardIndex') === below).get(0) : null;
    const cardAtLeft = isNotFirstColumn ? board.filter(cl => cl.get('boardIndex') === left).get(0) : null;
    const cardAtRight = isNotLastColumn ? board.filter(cr => cr.get('boardIndex') === right).get(0) : null;

    let indexes = [];

    if(shouldApplySameRule(card, cardAtLeft, cardAtRight, 'left', 'right', 'right', 'left')) {
        indexes = indexes.concat([right, left]);
    }

    if(shouldApplySameRule(card, cardAbove, cardBelow, 'top', 'bottom', 'bottom', 'top')) {
        indexes = indexes.concat([above, below]);
    }

    if(shouldApplySameRule(card, cardAbove, cardAtLeft, 'top', 'left', 'bottom', 'right')) {
        indexes = indexes.concat([above, left]);
    }

    if(shouldApplySameRule(card, cardBelow, cardAtLeft, 'bottom', 'left', 'top', 'right')) {
        indexes = indexes.concat([below, left]);
    }

    if(shouldApplySameRule(card, cardAbove, cardAtRight, 'top', 'right', 'bottom', 'left')) {
        indexes = indexes.concat([above, right]);
    }

    if(shouldApplySameRule(card, cardBelow, cardAtRight, 'bottom', 'right', 'top', 'left')) {
        indexes = indexes.concat([below, right]);
    }

    let tuples = indexes.map(index => ({ index: index, owner: card.get('owner') }));
    return sort(tuples);
}