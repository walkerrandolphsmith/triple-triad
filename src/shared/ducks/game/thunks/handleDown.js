import PHASE from './../../../constants/phases';
import { currentGameSelector } from './../index';
import { selectNextCard } from './selectNextCard';
import { getNextSelectedPiece } from './getNextSelectedPiece';

export const handleDown = () => (dispatch, getState) => {
    const currentGame = currentGameSelector(getState());

    let cases = {
        [PHASE.CARD_SELECTION]: () => {
            dispatch(selectNextCard('deck', 'down'));
        },
        [PHASE.PIECE_SELECTION]: () => {
            dispatch(getNextSelectedPiece('down'));
        }
    };

    cases[currentGame.get('phase')]();
};