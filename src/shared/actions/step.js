import * as types from './../constants/action-types';

export function nextStep() {
    return {
        type: types.NEXT_STEP
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

export function selectPiece(index) {
    return {
        type: types.SELECT_PIECE,
        payload: {
            index: index
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

export function aiTurn(index) {
    return {
        type: types.AI_TURN,
        payload: {
            index: index
        }
    }
}

export function calculateScore(index) {
    return {
        type: types.CALCULATE_SCORE,
        payload: {
            index: index
        }
    }
}