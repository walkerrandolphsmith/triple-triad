import PHASE from './../../../constants/phases';
import { currentGameSelector } from './../index';
import { selectNextCard } from './selectNextCard';
import { selectNextPiece } from './selectNextPiece';

export const handleUp = () => (dispatch, getState) => {
    const currentGame = currentGameSelector(getState());

    let cases = {
        [PHASE.HAND_SELECTION]: () => {
            dispatch(selectNextCard('deck', 'up'));
        },
        [PHASE.CARD_SELECTION]: () => {
            dispatch(selectNextCard('deck', 'up'));
        },
        [PHASE.PIECE_SELECTION]: () => {
            dispatch(selectNextPiece('up'));
        }
    };

    cases[currentGame.phase]();
};