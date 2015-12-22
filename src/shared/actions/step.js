import * as types from './../constants/action-types';

export function nextStep() {
    return {
        type: types.NEXTSTEP
    }
}

export function addCard(index) {
    return {
        type: types.ADDCARD,
        payload: {
            index: index
        }
    }
}

export function removeCard(index) {
    return {
        type: types.REMOVECARD,
        payload: {
            index: index
        }
    }
}

export function updateSettings(setting, isChecked) {
    return {
        type: types.UPDATESETTINGS,
        payload: {
            setting: setting,
            isChecked: isChecked
        }
    }
}

export function selectCard(index) {
    return {
        type: types.SELECTCARD,
        payload: {
            index: index
        }
    }
}