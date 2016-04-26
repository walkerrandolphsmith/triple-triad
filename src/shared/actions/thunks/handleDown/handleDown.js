import { getNextSelectedCard } from './../getNextSelectedCard/getNextSelectedCard';
import { getNextSelectedPiece } from './../getNextSelectedPiece/getNextSelectedPiece';
import { currentGameSelector } from './../../../selectors/currentGame/currentGameSelector';

export const handleDown = () => (dispatch, getState) => {
    const currentGame = currentGameSelector(getState());
    if(currentGame.get('phase') === 'pieceSelection') {
        dispatch(getNextSelectedPiece('down'));
    } else {
        dispatch(getNextSelectedCard('down'));
    }
};