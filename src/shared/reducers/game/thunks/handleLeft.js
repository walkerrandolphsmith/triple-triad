import PHASE from './../../../constants/phases';
import { currentGameSelector } from './../index';
import { getNextCardForHand } from './getNextCardForHand';
import { getNextSelectedPiece } from './getNextSelectedPiece';

export const handleLeft = () => (dispatch, getState) => {
    const currentGame = currentGameSelector(getState());

    let cases = {
        [PHASE.HAND_SELECTION]: () => {
            dispatch(getNextCardForHand('left'));
        },
        [PHASE.PIECE_SELECTION]: () => {
            dispatch(getNextSelectedPiece('left'));
        }
    };

    cases[currentGame.get('phase')]();
};