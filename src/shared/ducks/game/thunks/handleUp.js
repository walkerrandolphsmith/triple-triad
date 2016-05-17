import PHASE from './../../../constants/phases';
import { currentGameSelector } from './../index';
import { selectNextCard } from './selectNextCard';
import { getNextSelectedPiece } from './getNextSelectedPiece';

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
            dispatch(getNextSelectedPiece('up'));
        }
    };

    cases[currentGame.get('phase')]();
};