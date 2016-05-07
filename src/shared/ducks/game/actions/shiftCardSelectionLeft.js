import { SHIFT_CARD_SELECTION_LEFT } from './../index';
export const shiftCardSelectionLeft = () => ({
    type: SHIFT_CARD_SELECTION_LEFT,
    payload: {
        shiftFactor: -1
    }
});