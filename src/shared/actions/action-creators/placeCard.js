import { PLACE_CARD } from './../../constants/action-types';

export function placeCard(index) {
    return {
        type: PLACE_CARD,
        payload: {
            index: index
        }
    }
}