import PHASE from './../../../constants/phases';
import { currentGameSelector } from './../index';
import { getNextCardForHand } from './getNextCardForHand';
import { getNextSelectedPiece } from './getNextSelectedPiece';

export const handleRight = () => (dispatch, getState) => {
    const currentGame = currentGameSelector(getState());

    let cases = {
        [PHASE.HAND_SELECTION]: () => {
            dispatch(getNextCardForHand('right'));
        },
        [PHASE.PIECE_SELECTION]: () => {
            dispatch(getNextSelectedPiece('right'));
        }
    };

    cases[currentGame.get('phase')]();
};