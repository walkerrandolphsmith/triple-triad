import PHASE from './../../../constants/phases';
import { currentGameSelector } from './../index';
import { getNextSelectedCard } from './getNextSelectedCard';
import { getNextSelectedPiece } from './getNextSelectedPiece';

export const handleUp = () => (dispatch, getState) => {
    const currentGame = currentGameSelector(getState());

    let cases = {
        [PHASE.HAND_SELECTION]: () => {
            dispatch(getNextSelectedCard('up'));
        },
        [PHASE.CARD_SELECTION]: () => {
            dispatch(getNextSelectedCard('up'));
        },
        [PHASE.PIECE_SELECTION]: () => {
            dispatch(getNextSelectedPiece('up'));
        }
    };

    cases[currentGame.get('phase')]();
};