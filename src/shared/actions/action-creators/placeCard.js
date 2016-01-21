import { PLACE_CARD } from './../../constants/actionTypes';

export function placeCard(index) {
    return {
        type: PLACE_CARD,
        payload: {
            index: index
        }
    }
}