export const cardSelectionShiftedLeft = (state, payload) => state
    .set('shiftFactor', state.get('shiftFactor') + payload.shiftFactor);