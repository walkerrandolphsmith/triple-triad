import { SERVER, ADD_CARD } from './../../../constants/actionTypes';

export function addCard(id, owner) {
    return {
        type: SERVER + ADD_CARD,
        payload: {
            id: id,
            owner: owner
        }
    }
}
