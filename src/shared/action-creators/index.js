import * as types from './../constants/action-types';
import { getCardsToAdd, selectCardForOpponent, getValidPiece, basicRule, sameRule, getNextCardToFocus, getCardToSelect } from './utils';

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

export function setFocus(index) {
    return {
        type: types.SET_FOCUS,
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

export const determineCardToSelect = () => (dispatch, getState) => {
  const state = getState();

  const card = getCardToSelect(state.game);

  dispatch(selectCard(card.id));

};

export const determineNextFocusCard = (directionInLoop) => (dispatch, getState) => {

    const state = getState();

    const nextCard = getNextCardToFocus(state.game, directionInLoop);

    dispatch(setFocus(nextCard));
};

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
        dispatch(nextStep());
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

export const aiTurn = () => (dispatch, getState) => {
    dispatch(startAiTurn());

    const state = getState();

    let selectedCard = selectCardForOpponent(state.game);
    dispatch(selectCard(selectedCard));

    let piece = getValidPiece(state.game);
    if(piece >= 0) {
        dispatch(playerTakesTurn(piece, false));
    }else{
        dispatch(nextStep());
    }

    dispatch(endAiTurn());
};

export const playerTakesTurn = (selectedPiece, isPlayer) => (dispatch, getState) => {
    dispatch(selectPiece(selectedPiece));
    dispatch(applyFlips(selectedPiece));

    if(isPlayer){
        dispatch(aiTurn());
    }
};

export const applyFlips = (i) => (dispatch, getState) => {
    const state = getState();

    let tuples = sameRule(i, state.game);

    tuples.forEach(tuple => {
        dispatch(updateBoard(tuple.index, tuple.owner));
    });

    tuples = basicRule(i, state.game);

    tuples.forEach(tuple => {
        dispatch(updateBoard(tuple.index, tuple.owner));
    });
};