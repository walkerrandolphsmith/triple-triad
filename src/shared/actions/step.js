import * as types from './../constants/action-types';

export function nextStep() {
    return {
        type: types.NEXTSTEP
    }
}

export function addCard() {
    return {
        type: types.ADDCARD
    }
}

export function removeCard() {
    return {
        type: types.REMOVECARD
    }
}