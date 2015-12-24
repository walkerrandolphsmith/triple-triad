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