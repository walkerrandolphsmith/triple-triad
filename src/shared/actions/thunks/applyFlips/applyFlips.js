import { applyFlipRules } from './../../utils';
import { updateBoard } from './../../action-creators';
import getCurrentGame from './../../utils/getCurrentGame';

export const applyFlips = () => (dispatch, getState) => {
    getFlips(getState).forEach(tuple => {
        dispatch(updateBoard(tuple.index, tuple.owner));
    });
};

function getFlips(getState) {
    const currentGame = getCurrentGame(getState());
    const i = currentGame.get('selectedPiece');
    const deck = currentGame.get('deck');
    return applyFlipRules(i, deck);
}