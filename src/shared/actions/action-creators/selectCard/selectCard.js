import { SERVER, SELECT_CARD } from './../../../constants/actionTypes';

export function selectCard(id) {
    return {
        type: SERVER + SELECT_CARD,
        payload: {
            id: id
        }
    };
}
