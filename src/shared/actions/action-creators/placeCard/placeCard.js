import { SERVER, PLACE_CARD } from './../../../constants/actionTypes';

export function placeCard(index) {
    return {
        type: SERVER + PLACE_CARD,
        payload: {
            index: index
        }
    }
}