import PHASE from './../../../constants/phases';
import { getNextSelectedCard } from './../getNextSelectedCard/getNextSelectedCard';
import { getNextSelectedPiece } from './../getNextSelectedPiece/getNextSelectedPiece';
import { currentGameSelector } from './../../../reducers/game';

export const handleDown = () => (dispatch, getState) => {
    const currentGame = currentGameSelector(getState());

    let cases = {
        [PHASE.CARD_SELECTION]: () => {
            dispatch(getNextSelectedCard('down'));
        },
        [PHASE.PIECE_SELECTION]: () => {
            dispatch(getNextSelectedPiece('down'));
        }
    };

    cases[currentGame.get('phase')]();
};