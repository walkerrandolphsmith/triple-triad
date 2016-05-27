import PHASE from './../../../constants/phases';
import { currentGameSelector } from './../index';
import { selectNextCard } from './selectNextCard';
import { selectNextPiece } from './selectNextPiece';

export const handleLeft = () => (dispatch, getState) => {
    const currentGame = currentGameSelector(getState());

    let cases = {
        [PHASE.HAND_SELECTION]: () => {
            dispatch(selectNextCard('hand', 'left'));
        },
        [PHASE.PIECE_SELECTION]: () => {
            dispatch(selectNextPiece('left'));
        }
    };

    cases[currentGame.phase]();
};