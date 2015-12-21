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