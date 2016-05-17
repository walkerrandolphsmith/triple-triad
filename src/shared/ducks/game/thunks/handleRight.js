import PHASE from './../../../constants/phases';
import { currentGameSelector } from './../index';
import { selectNextCard } from './selectNextCard';
import { selectNextPiece } from './selectNextPiece';

export const handleRight = () => (dispatch, getState) => {
    const currentGame = currentGameSelector(getState());

    let cases = {
        [PHASE.HAND_SELECTION]: () => {
            dispatch(selectNextCard('hand', 'right'));
        },
        [PHASE.PIECE_SELECTION]: () => {
            dispatch(selectNextPiece('right'));
        }
    };

    cases[currentGame.get('phase')]();
};