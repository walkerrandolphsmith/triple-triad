import { applyFlipRules } from './../../utils';
import { updateBoard } from './../../action-creators';
import getCurrentGame from './../../utils/getCurrentGame';

export const applyFlips = () => (dispatch, getState) => {
    const state = getState();
    const currentGame = getCurrentGame(state);
    const i = currentGame.get('selectedPiece');
    const tuples = applyFlipRules(i, currentGame);

    tuples.forEach(tuple => {
        dispatch(updateBoard(tuple.index, tuple.owner));
    });
};