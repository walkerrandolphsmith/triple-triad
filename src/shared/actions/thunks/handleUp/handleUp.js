import PHASE from './../../../constants/phases';
import { getNextSelectedCard } from './../getNextSelectedCard/getNextSelectedCard';
import { getNextSelectedPiece } from './../getNextSelectedPiece/getNextSelectedPiece';
import { currentGameSelector } from './../../../reducers/game';

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