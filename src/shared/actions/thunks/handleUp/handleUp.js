import { getNextSelectedCard } from './../getNextSelectedCard/getNextSelectedCard';
import { getNextSelectedPiece } from './../getNextSelectedPiece/getNextSelectedPiece';
import { currentGameSelector } from './../../../selectors/currentGame/currentGameSelector';

export const handleUp = () => (dispatch, getState) => {
    const currentGame = currentGameSelector(getState());

    let cases = {
        'handSelection': () => {
            dispatch(getNextSelectedCard('up'));
        },
        'cardSelection': () => {
            dispatch(getNextSelectedCard('up'));
        },
        'pieceSelection': () => {
            dispatch(getNextSelectedPiece('up'));
        }
    };

    cases[currentGame.get('phase')]();
};