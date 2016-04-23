import { getNextSelectedCard } from './../getNextSelectedCard/getNextSelectedCard';
import { getNextSelectedPiece } from './../getNextSelectedPiece/getNextSelectedPiece';
import getCurrentGame from './../../utils/getCurrentGame';

export const handleDown = () => (dispatch, getState) => {
    const currentGame = getCurrentGame(getState());
    if(currentGame.get('phase') === 'pieceSelection') {
        dispatch(getNextSelectedPiece('down'));
    } else {
        dispatch(getNextSelectedCard('down'));
    }
};