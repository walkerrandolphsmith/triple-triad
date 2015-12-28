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

export function applyRules(index) {
    return {
        type: types.APPLY_RULES,
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

export function playerTakesTurn(selectedPiece) {
    return function(dispatch, getState) {

        dispatch(selectPiece(selectedPiece, true));
        dispatch(applyRules(selectedPiece));

        dispatch(startAiTurn());

        dispatch(selectCard(0));

        const state = getState();
        let validPieces = state.game.board.reduce((validPieces, piece, index) => { if(!piece) validPieces.push(index); return validPieces }, []);

        if(validPieces.length > 0) {
            let validPiece = _.sample(validPieces);
            dispatch(selectPiece(validPiece, false));
            dispatch(applyRules(validPiece));
        }

        dispatch(endAiTurn());
    }
}