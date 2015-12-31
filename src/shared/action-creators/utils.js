import _ from 'lodash';

export function getCardsToAdd(game) {
    const unownedCards = game.get('deck').filter(card => card.get('owner') === game.get('ownerType').get('none'));
    const cards = sample(unownedCards, 5);
    return cards.map(card => card.get('id'))
}

export function selectCardForOpponent(game){
    let opponentHand = game.get('deck').filter(card => {
        return card.get('owner') === game.get('ownerType').get('opponent')
                && !game.get('board').find(c => { return c && c.get('id') === card.get('id') });
    });

    return sample(opponentHand).get('id');
}

export function getValidPiece(game){
    let validPieces = game.get('board').reduce((validPieces, piece, index) => { if(!piece) validPieces.push(index); return validPieces }, []);

    return validPieces.length > 0 ? _.sample(validPieces) : -1;
}

export function basicRule(i, game){
    const board = game.get('board');
    
    const row = i / 3;
    const column = i % 3;

    const card = board.get(i);

    const above = i-3;
    const below = i+3;
    const left = i-1;
    const right = i+1;

    const isNotFirstRow = row > 0;
    const isNotLastRow = row < 2;
    const isNotFirstColumn = column > 0;
    const isNotLastColumn = column < 2;

    const cardAbove = isNotFirstRow ? board.get(above) : null;
    const cardBelow = isNotLastRow ? board.get(below) : null;
    const cardAtLeft = isNotFirstColumn? board.get(left) : null;
    const cardAtRight = isNotLastColumn ? board.get(right): null;

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

export function sameRule(i, game){

    const board = game.get('board');

    const row = i / 3;
    const column = i % 3;

    const card = board.get(i);

    const above = i-3;
    const below = i+3;
    const left = i-1;
    const right = i+1;

    const isNotFirstRow = row > 0;
    const isNotLastRow = row < 2;
    const isNotFirstColumn = column > 0;
    const isNotLastColumn = column < 2;

    const cardAbove = isNotFirstRow ? board.get(above) : null;
    const cardBelow = isNotLastRow ? board.get(below) : null;
    const cardAtLeft = isNotFirstColumn? board.get(left) : null;
    const cardAtRight = isNotLastColumn ? board.get(right): null;

    let indexes = [];

    if(shouldApplySameRule(card, cardAtLeft, cardAtRight, 'left', 'right', 'right', 'left'))
        indexes = indexes.concat([right, left]);

    if(shouldApplySameRule(card, cardAbove, cardBelow, 'top', 'bottom', 'bottom', 'top'))
        indexes = indexes.concat([above, below]);

    if(shouldApplySameRule(card, cardAbove, cardAtLeft, 'top', 'left', 'bottom', 'right'))
        indexes = indexes.concat([above, left]);

    if(shouldApplySameRule(card, cardBelow, cardAtLeft, 'bottom', 'left', 'top', 'right'))
        indexes = indexes.concat([below, left]);

    if(shouldApplySameRule(card, cardAbove, cardAtRight, 'top', 'right', 'bottom', 'left'))
        indexes = indexes.concat([above, right]);

    if(shouldApplySameRule(card, cardBelow, cardAtRight, 'bottom', 'right', 'top', 'left'))
        indexes = indexes.concat([below, right]);

    let tuples = indexes.map(index => ({index: index, owner: card.get('owner')}) );
    return tuples.sort((x, y) => { return x.index > y.index})
}


function shouldFLip(card, otherCard, attackDirection, defenseDirection){
    return (
    card
    && otherCard
    && card.get('owner') !== otherCard.get('owner')
    && card.get('rank').get(attackDirection) > otherCard.get('rank').get(defenseDirection)
    )
}

function shouldApplySameRule(card, firstCard, secondCard, d1, d2, d3, d4){
    return (
        firstCard
        && secondCard
        && firstCard.get('owner') !== card.get('owner')
        && secondCard.get('owner') !== card.get('owner')
        && card.get('rank').get(d1) === firstCard.get('rank').get(d3)
        && card.get('rank').get(d2) === secondCard.get('rank').get(d4)
    )
}

function sample(list, size){
    if(size === undefined){
        let index = getIndex(list.size);
        return list.get(index);
    }
    let indexes = getIndexes(list.size, size);
    return indexes.map(i => list.get(i));
}

function getIndexes(listSize, size){
    let counter = 0;
    let indexes = [];
    while(counter < size){
        let index = getIndex(listSize);
        if(indexes.indexOf(index) < 0) {
            indexes.push(index);
            counter++;
        }
    }
    return indexes;
}

function getIndex(listSize){
    return Math.floor(Math.random() * (listSize -1));
}