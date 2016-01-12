import { fromJS } from 'immutable';
import { getBoard } from './../../selectors/boardSelector';

export function basicRule(i, game){
    const board = fromJS(getBoard(game.get('deck').toJS()));

    const row = i / 3;
    const column = i % 3;

    const card = board.filter(card => card && card.get('boardIndex') === i).get(0);

    const above = i-3;
    const below = i+3;
    const left = i-1;
    const right = i+1;

    const isNotFirstRow = row > 0;
    const isNotLastRow = row < 2;
    const isNotFirstColumn = column > 0;
    const isNotLastColumn = column < 2;

    const cardAbove = isNotFirstRow ? board.filter(card => card.get('boardIndex') === above).get(0) : null;
    const cardBelow = isNotLastRow ? board.filter(card => card.get('boardIndex') === below).get(0) : null;
    const cardAtLeft = isNotFirstColumn? board.filter(card => card.get('boardIndex') === left).get(0) : null;
    const cardAtRight = isNotLastColumn ? board.filter(card => card.get('boardIndex') === right).get(0): null;

    let owner = card.get('owner');
    let other = owner === 1 ? 2 : 1;

    let tuples = [];

    if(shouldFLip(card, cardAbove, 'top', 'bottom'))
        tuples.push({index: above, owner: card.get('owner')});

    if(shouldFLip(card, cardBelow, 'bottom', 'top'))
        tuples.push({index: below, owner: card.get('owner')});

    if(shouldFLip(card, cardAtLeft, 'left', 'right'))
        tuples.push({index: left, owner: card.get('owner')});

    if(shouldFLip(card, cardAtRight, 'right', 'left'))
        tuples.push({index: right, owner: card.get('owner')});

    tuples = tuples.sort((x, y) => { return x.index > y.index});

    if(shouldFLip(cardAbove, card, 'bottom', 'top')
        || shouldFLip(cardBelow, card, 'top', 'bottom')
        || shouldFLip(cardAtLeft, card, 'right', 'left')
        || shouldFLip(cardAtRight, card, 'left', 'right')
    ) tuples.push({index: i, owner: other});

    return tuples;
}

function shouldFLip(card, otherCard, attackDirection, defenseDirection){
    return (
    card
    && otherCard
    && card.get('owner') !== otherCard.get('owner')
    && card.get('rank').get(attackDirection) > otherCard.get('rank').get(defenseDirection)
    )
}
