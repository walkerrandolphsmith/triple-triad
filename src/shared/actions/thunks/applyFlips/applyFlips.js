import { applyFlipRules } from './../../utils';
import { updateBoard, currentGameSelector } from './../../../reducers/game';

export const applyFlips = () => (dispatch, getState) => {
    getFlips(getState).forEach(tuple => {
        dispatch(updateBoard(tuple.index, tuple.owner));
    });
};

function getFlips(getState) {
    const currentGame = currentGameSelector(getState());
    const i = currentGame.get('selectedPiece');
    const deck = currentGame.get('deck');
    return applyFlipRules(i, deck);
}