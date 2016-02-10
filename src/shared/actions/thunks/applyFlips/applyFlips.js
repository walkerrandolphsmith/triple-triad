import { applyFlipRules } from './../../utils';
import { updateBoard } from './../../action-creators';

export const applyFlips = () => (dispatch, getState) => {
    const state = getState();

    const i = state.game.get('selectedPiece');
    const tuples = applyFlipRules(i, state.game);

    tuples.forEach(tuple => {
        dispatch(updateBoard(tuple.index, tuple.owner));
    });
};