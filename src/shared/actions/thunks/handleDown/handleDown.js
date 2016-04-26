import { getNextSelectedCard } from './../getNextSelectedCard/getNextSelectedCard';
import { getNextSelectedPiece } from './../getNextSelectedPiece/getNextSelectedPiece';
import { currentGameSelector } from './../../../selectors/currentGame/currentGameSelector';

export const handleDown = () => (dispatch, getState) => {
    const currentGame = currentGameSelector(getState());

    let cases = {
        'cardSelection': () => {
            dispatch(getNextSelectedCard('down'));
        },
        'pieceSelection': () => {
            dispatch(getNextSelectedPiece('down'));
        }
    };

    cases[currentGame.get('phase')]();
};