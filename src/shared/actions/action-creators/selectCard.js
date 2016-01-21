import { SELECT_CARD } from './../../constants/actionTypes';

export function selectCard(id) {
    return {
        type: SELECT_CARD,
        payload: {
            id: id
        }
    }
}
