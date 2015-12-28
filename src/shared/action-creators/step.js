import * as types from './../constants/action-types';

export function nextStep() {
    return {
        type: types.NEXT_STEP
    }
}

export function setHands() {
    return function (dispatch, getState) {
        const state = getState();
        if(state.settings.randomHand) {
            dispatch(setHand('hand', 0));
            dispatch(nextStep());
        }
        dispatch(setHand('opponentHand', 1));
    }
}

export function setHand(hand, owner) {
    return {
        type: types.SET_HAND,
        payload: {
            hand: hand,
            owner: owner
        }
    }
}

export function addCard(index) {
    return {
        type: types.ADD_CARD,
        payload: {
            index: index
        }
    }
}

export function removeCard(index) {
    return {
        type: types.REMOVE_CARD,
        payload: {
            index: index
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

export function selectCard(index) {
    return {
        type: types.SELECT_CARD,
        payload: {
            index: index
        }
    }
}

export function selectPiece(index, isPlayer) {
    return {
        type: types.SELECT_PIECE,
        payload: {
            index: index,
            isPlayer: isPlayer
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

export function playerTakesTurn(selectedPiece) {
    return function(dispatch, getState) {

        dispatch(selectPiece(selectedPiece, true));

        const originalState = getState();

        basicRule(dispatch, selectedPiece, originalState.game.board);

        dispatch(startAiTurn());

        dispatch(selectCard(0));

        const state = getState();
        let validPieces = state.game.board.reduce((validPieces, piece, index) => { if(!piece) validPieces.push(index); return validPieces }, []);

        if(validPieces.length > 0) {
            let validPiece = _.sample(validPieces);
            dispatch(selectPiece(validPiece, false));
            basicRule(dispatch, selectedPiece, state.game.board);
        }

        dispatch(endAiTurn());
    }
}

export function basicRule(dispatch, i, board){
    const row = i / 3;
    const column = i % 3;

    let card = board[i];

    let above = i-3;
    let below = i+3;
    let left = i-1;
    let right = i+1;

    let cardAbove = board[above];
    let cardBelow = board[below];
    let cardAtLeft = board[left];
    let cardAtRight = board[right];

    let isNotFirstRow = row > 0;
    let isNotLastRow = row < 2;
    let isNotFirstColumn = column > 0;
    let isNotLastColumn = column < 2;

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
}


function shouldFLip(card, otherCard, attackDirection, defenseDirection){
    if(card && otherCard
        && card.owner !== otherCard.owner
        && card.rank[attackDirection] > otherCard.rank[defenseDirection]) {
        return true;
    }
    return false;
}
