import PHASE from './../../../constants/phases';
import { currentGameSelector } from './../index';
import { selectNextCard } from './selectNextCard';
import { getNextSelectedPiece } from './getNextSelectedPiece';

export const handleLeft = () => (dispatch, getState) => {
    const currentGame = currentGameSelector(getState());

    let cases = {
        [PHASE.HAND_SELECTION]: () => {
            dispatch(selectNextCard('hand', 'left'));
        },
        [PHASE.PIECE_SELECTION]: () => {
            dispatch(getNextSelectedPiece('left'));
        }
    };

    cases[currentGame.get('phase')]();
};