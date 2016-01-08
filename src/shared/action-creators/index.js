import * as types from './../constants/action-types';
import { getCardsToAdd, selectCardForOpponent, getValidPiece, basicRule, sameRule, getCardToSelect } from './utils';

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

export function updateSettings(setting, isChecked) {
    return {
        type: types.UPDATE_SETTINGS,
        payload: {
            setting: setting,
            isChecked: isChecked
        }
    }
}

export function setPhase(phase) {
    return {
        type: types.SET_PHASE,
        payload: {
            phase: phase
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

export function placeCard(index) {
    return {
        type: types.PLACE_CARD,
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

    let randomHand = state.settings.get('randomHand');

    if(randomHand) {
        dispatch(setHand(1));
        dispatch(beginRound());
    }
    dispatch(setHand(2));
};

export const setHand = (owner) => (dispatch, getState) => {
    const state = getState();
    let randomHand = getCardsToAdd(state.game);
    randomHand.forEach(id => {
        dispatch(addCard(id, owner))
    });
};

export const beginRound = () => (dispatch, getState) => {
    dispatch(getNextSelectedCard());
    dispatch(nextStep());
};

export const getNextSelectedCard = (directionInLoop) => (dispatch, getState) => {
    const state = getState();

    const card = getCardToSelect(state.game, directionInLoop);

    dispatch(selectCard(card.id));
};

export const selectedPieceByClick = (index) => (dispatch, getState) => {
    dispatch(selectPiece(index));
    dispatch(playerTakesTurn(true));
};

export const playerTakesTurn = (isPlayer) => (dispatch, getState) => {
    const state = getState();

    dispatch(placeCard());
    dispatch(applyFlips());
    dispatch(selectCard(-1));
    dispatch(selectPiece(-1));

    if(isPlayer){
        dispatch(aiTurn());
        dispatch(getNextSelectedCard());
    }
};

export const applyFlips = () => (dispatch, getState) => {
    const state = getState();

    let i = state.game.get('selectedPiece');
    let tuples = sameRule(i, state.game);

    tuples.forEach(tuple => {
        dispatch(updateBoard(tuple.index, tuple.owner));
    });

    tuples = basicRule(i, state.game);

    tuples.forEach(tuple => {
        dispatch(updateBoard(tuple.index, tuple.owner));
    });
};

export const aiTurn = () => (dispatch, getState) => {
    dispatch(startAiTurn());

    const state = getState();

    let selectedCard = selectCardForOpponent(state.game);
    dispatch(selectCard(selectedCard));

    let piece = getValidPiece(state.game);
    if(piece >= 0) {
        dispatch(selectPiece(piece));
        dispatch(playerTakesTurn(false));
    }else{
        dispatch(nextStep());
    }

    dispatch(endAiTurn());
};

export const handleUp = () => (dispatch, getState) => {
    console.log("UP");

    const state = getState();

    if(state.game.get('phase') === 'pieceSelection'){

    }else{
        dispatch(getNextSelectedCard(-1));
    }
};

export const handleDown = () => (dispatch, getState) => {
    console.log("DOWN");

    const state = getState();

    if(state.game.get('phase') === 'pieceSelection'){

    }else{
        dispatch(getNextSelectedCard(1));
    }
};

export const handleLeft = () => (dispatch, getState) => {
    console.log("LEFT");
};

export const handleRight = () => (dispatch, getState) => {
    console.log("RIGHT");
};

export const handleEnter = () => (dispatch, getState) => {
    const state = getState();

    if(state.game.get('phase') === 'cardSelection'){
        dispatch(setPhase('pieceSelection'));
    }else{

    }
};

export const handleEscape = () => (dispatch, getState) => {
    console.log("ESC");
};