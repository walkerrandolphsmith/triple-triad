import { SELECT_CARD } from './../../constants/action-types';

export function selectCard(id) {
    return {
        type: SELECT_CARD,
        payload: {
            id: id
        }
    }
}
