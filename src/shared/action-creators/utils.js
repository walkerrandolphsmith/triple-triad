import _ from 'lodash';
import { toJS, fromJS } from 'immutable';
import { getBoard } from './../selectors/boardSelector';
import { getHand } from './../selectors/handSelector';
import { getAvailableDeck } from './../selectors/availableDeckSelector';
import { getValidPieces } from './../selectors/validPiecesSelector';
import KEY_CODE from './../constants/keyCodes';

export function getCardToSelect(game, directionInLoop){

    const hand = getHand(game.get('deck').toJS(), 1);
    const id = game.get('selectedCard');

    if(id === -1) return hand[0];

    const i = hand.findIndex(card => card.id === id);

    return hand[(i + directionInLoop) % hand.length];
}

export function getPieceToSelect(game, keyCode){
    const board = getBoard(game.get('deck').toJS());
    const validPieces = getValidPieces(board);
    const selectedPiece = game.get('selectedPiece');
    return selectedPiece === -1 ? validPieces[0] : selectedPiece;
}

export function getCardsToAdd(game) {
    let deck = getAvailableDeck(game.get('deck').toJS(), 1);
    let unOwnedCards = deck.filter(card => card.owner === 0);
    return _.sample(unOwnedCards, 5);
}

export function selectCardForOpponent(game){
    let opponentHand = getHand(game.get('deck').toJS(), 2);
    let card = _.sample(opponentHand);
    return card.id;
}

export function getValidPiece(game){
    const board = getBoard(game.get('deck').toJS());
    let validPieces = getValidPieces(board);
    return validPieces.length > 0 ? _.sample(validPieces) : -1;
}

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

    const cardAbove = isNotFirstRow ? board.filter(card => card && card.get('boardIndex') === above).get(0) : null;
    const cardBelow = isNotLastRow ? board.filter(card => card && card.get('boardIndex') === below).get(0) : null;
    const cardAtLeft = isNotFirstColumn? board.filter(card => card && card.get('boardIndex') === left).get(0) : null;
    const cardAtRight = isNotLastColumn ? board.filter(card => card && card.get('boardIndex') === right).get(0): null;

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

    const cardAbove = isNotFirstRow ? board.filter(card => card && card.get('boardIndex') === above).get(0) : null;
    const cardBelow = isNotLastRow ? board.filter(card => card && card.get('boardIndex') === below).get(0) : null;
    const cardAtLeft = isNotFirstColumn? board.filter(card => card && card.get('boardIndex') === left).get(0) : null;
    const cardAtRight = isNotLastColumn ? board.filter(card => card && card.get('boardIndex') === right).get(0): null;

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