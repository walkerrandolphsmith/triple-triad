import * as types from './../constants/action-types';
import _ from 'lodash';

export function nextStep() {
    return {
        type: types.NEXT_STEP
    }
}

export function resetStep() {
    return {
        type: types.RESET_STEP
    }
}

export function resetGame() {
    return {
        type: types.RESET_GAME
    }
}

export function resetSettings() {
    return {
        type: types.RESET_SETTINGS
    }
}

export function addCard(id, owner) {
    return {
        type: types.ADD_CARD,
        payload: {
            id: id,
            owner: owner
        }
    }
}

export function removeCard(id) {
    return {
        type: types.REMOVE_CARD,
        payload: {
            id: id
        }
    }
}

export function updateSettings(setting, isChecked) {
    return {
        type: types.UPDATE_SETTINGS,
        payload: {
            setting: setting,
            isChecked: isChecked
        }
    }
}

export function selectCard(id) {
    return {
        type: types.SELECT_CARD,
        payload: {
            id: id
        }
    }
}

export function selectPiece(index) {
    return {
        type: types.SELECT_PIECE,
        payload: {
            index: index
        }
    }
}

export function updateBoard(index, owner){
    return {
        type: types.UPDATE_BOARD,
        payload: {
            index: index,
            owner: owner
        }
    }
}

export function startAiTurn() {
    return {
        type: types.START_AI_TURN
    }
}

export function endAiTurn() {
    return {
        type: types.END_AI_TURN
    }
}

export const newGame = () => (dispatch, getState) => {
    dispatch(resetStep());
    dispatch(resetGame());
    dispatch(resetSettings());
};

export const setHands = () => (dispatch, getState) => {
    const state = getState();
    const game = state.game.toJS();

    const settings = state.settings.toJS();

    if(settings.randomHand) {
        dispatch(setHand(game.ownerType.player));
        dispatch(nextStep());
    }
    dispatch(setHand(game.ownerType.opponent));
};

export const setHand = (owner) => (dispatch, getState) => {
    const state = getState();
    const game = state.game.toJS();

    let unownedCards = game.deck.filter(card => {
        return card.owner === game.ownerType.none;
    });

    let randomHand = _.sample(unownedCards, 5);

    randomHand.forEach(card => {
        dispatch(addCard(card.id, owner))
    });
};

export const aiTurn = () => (dispatch, getState) => {
    dispatch(startAiTurn());

    const state = getState();
    const game = state.game.toJS();

    let opponentHand = game.deck.filter(card => {
        return card.owner === game.ownerType.opponent && !game.board.find(c => { return c && c.id === card.id });
    });

    let selectedCard = _.sample(opponentHand);

    dispatch(selectCard(selectedCard.id));

    let validPieces = game.board.reduce((validPieces, piece, index) => { if(!piece) validPieces.push(index); return validPieces }, []);

    if(validPieces.length > 0) {
        let validPiece = _.sample(validPieces);
        dispatch(playerTakesTurn(validPiece, false));
    }

    dispatch(endAiTurn());
};

export const playerTakesTurn = (selectedPiece, isPlayer) => (dispatch, getState) => {
    dispatch(selectPiece(selectedPiece));
    dispatch(rule(selectedPiece));
    dispatch(sameRule(selectedPiece));

    if(isPlayer){
        dispatch(aiTurn());
    }
};

export const rule = (i) => (dispatch, getState) => {
    const state = getState();
    const game = state.game.toJS();

    const board = game.board;

    const row = i / 3;
    const column = i % 3;

    const card = board[i];

    const above = i-3;
    const below = i+3;
    const left = i-1;
    const right = i+1;

    const cardAbove = board[above];
    const cardBelow = board[below];
    const cardAtLeft = board[left];
    const cardAtRight = board[right];

    const isNotFirstRow = row > 0;
    const isNotLastRow = row < 2;
    const isNotFirstColumn = column > 0;
    const isNotLastColumn = column < 2;

    if(isNotFirstRow && shouldFLip(card, cardAbove, 'top', 'bottom'))
        dispatch(updateBoard(above, card.owner));

    if(isNotLastRow && shouldFLip(card, cardBelow, 'bottom', 'top'))
        dispatch(updateBoard(below, card.owner));

    if(isNotFirstColumn && shouldFLip(card, cardAtLeft, 'left', 'right'))
        dispatch(updateBoard(left, card.owner));

    if(isNotLastColumn && shouldFLip(card, cardAtRight, 'right', 'left'))
        dispatch(updateBoard(right, card.owner));

    if(isNotFirstRow && shouldFLip(cardAbove, card, 'bottom', 'top'))
        dispatch(updateBoard(i, cardAbove.owner));

    if(isNotLastRow && shouldFLip(cardBelow, card, 'top', 'bottom'))
        dispatch(updateBoard(i, cardBelow.owner));

    if(isNotFirstColumn && shouldFLip(cardAtLeft, card, 'right', 'left'))
        dispatch(updateBoard(i, cardAtLeft.owner));

    if(isNotLastColumn && shouldFLip(cardAtRight, card, 'left', 'right'))
        dispatch(updateBoard(i, cardAtRight.owner));
};

function shouldFLip(card, otherCard, attackDirection, defenseDirection){
    return (
    card
    && otherCard
    && card.owner !== otherCard.owner
    && card.rank[attackDirection] > otherCard.rank[defenseDirection]
    )
}

export const sameRule = (i) => (dispatch, getState) => {
    const state = getState();
    const game = state.game.toJS();

    const board = game.board;

    const row = i / 3;
    const column = i % 3;

    const card = board[i];

    const above = i-3;
    const below = i+3;
    const left = i-1;
    const right = i+1;

    const cardAbove = board[above];
    const cardBelow = board[below];
    const cardAtLeft = board[left];
    const cardAtRight = board[right];

    const isNotFirstRow = row > 0;
    const isNotLastRow = row < 2;
    const isNotFirstColumn = column > 0;
    const isNotLastColumn = column < 2;

    let indexesToUpdate = [];

    if(shouldEvaluateSameRule(isNotFirstColumn, isNotLastColumn, card, cardAtLeft, cardAtRight))
        if(card.rank.left === cardAtLeft.rank.right && card.rank.right === cardAtRight.rank.left)
            indexesToUpdate = indexesToUpdate.concat([right, left]);

    if(shouldEvaluateSameRule(isNotFirstRow, isNotLastRow, card, cardAbove, cardBelow))
        if(card.rank.top === cardAbove.rank.bottom && card.rank.bottom === cardBelow.rank.top)
            indexesToUpdate = indexesToUpdate.concat([above, below]);

    if(shouldEvaluateSameRule(isNotFirstRow, isNotFirstColumn, card, cardAbove, cardAtLeft))
        if(card.rank.top === cardAbove.rank.bottom && card.rank.left === cardAtLeft.rank.right)
            indexesToUpdate = indexesToUpdate.concat([above, left]);

    if(shouldEvaluateSameRule(isNotLastRow, isNotFirstColumn, card, cardBelow, cardAtLeft))
        if(card.rank.bottom === cardBelow.rank.top && card.rank.left === cardAtLeft.rank.right)
            indexesToUpdate = indexesToUpdate.concat([below, left]);

    if(shouldEvaluateSameRule(isNotFirstRow, isNotLastColumn, card, cardAbove, cardAtRight))
        if(card.rank.top === cardAbove.rank.bottom && card.rank.right === cardAtRight.rank.left)
            indexesToUpdate = indexesToUpdate.concat([above, right]);

    if(shouldEvaluateSameRule(isNotLastRow, isNotLastColumn, card, cardBelow, cardAtRight))
        if(card.rank.bottom === cardBelow.rank.top && card.rank.right === cardAtRight.rank.left)
            indexesToUpdate = indexesToUpdate.concat([below, right]);

    indexesToUpdate.forEach(index => { dispatch(updateBoard(index, card.owner)) })
};

function shouldEvaluateSameRule(boundary, boundaryTwo, card, firstCard, secondCard){
    return (
    boundary
    && boundaryTwo
    && firstCard
    && secondCard
    && firstCard.owner !== card.owner
    && secondCard.owner !== card.owner
    )
}