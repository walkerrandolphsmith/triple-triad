import { ADD_CARD } from './../../constants/action-types';

export function addCard(id, owner) {
    return {
        type: ADD_CARD,
        payload: {
            id: id,
            owner: owner
        }
    }
}
