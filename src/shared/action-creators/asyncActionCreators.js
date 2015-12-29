import {nextStep, setHand, addCard, removeCard, updateSettings, selectCard, selectPiece, updateBoard, startAiTurn, endAiTurn} from './actionCreators';

export const setHands = () => (dispatch, getState) => {
    const state = getState();
    if(state.settings.randomHand) {
        dispatch(setHand(state.game.ownerType.player));
        dispatch(nextStep());
    }
    dispatch(setHand(state.game.ownerType.opponent));
};

export const aiTurn = () => (dispatch, getState) => {
    dispatch(startAiTurn());

    const state = getState();

    let opponentHand = state.game.deck.filter(card => {
        return card.owner === 2 && !_.contains(state.game.board, card);
    });

    let selectedCard = _.sample(opponentHand);

    dispatch(selectCard(selectedCard.id));

    let validPieces = state.game.board.reduce((validPieces, piece, index) => { if(!piece) validPieces.push(index); return validPieces }, []);

    if(validPieces.length > 0) {
        let validPiece = _.sample(validPieces);
        dispatch(playerTakesTurn(validPiece, false));
    }

    dispatch(endAiTurn());
};

export const playerTakesTurn = (selectedPiece, isPlayer) => (dispatch, getState) => {
    dispatch(selectPiece(selectedPiece));
    dispatch(rule(selectedPiece));

    if(isPlayer){
        dispatch(aiTurn());
    }
};

export const rule = (i) => (dispatch, getState) => {
    const state = getState();

    const board = state.game.board;

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
