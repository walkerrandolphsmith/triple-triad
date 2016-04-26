import { getNextSelectedCard } from './../getNextSelectedCard/getNextSelectedCard';
import { getNextSelectedPiece } from './../getNextSelectedPiece/getNextSelectedPiece';
import { currentGameSelector } from './../../../selectors/currentGame/currentGameSelector';

export const handleUp = () => (dispatch, getState) => {
    const currentGame = currentGameSelector(getState());
    if(currentGame.get('phase') === 'pieceSelection') {
        dispatch(getNextSelectedPiece('up'));
    } else {
        dispatch(getNextSelectedCard('up'));
    }
};