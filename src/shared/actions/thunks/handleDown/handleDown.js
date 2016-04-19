import { getNextSelectedCard } from './../getNextSelectedCard/getNextSelectedCard';
import { getNextSelectedPiece } from './../getNextSelectedPiece/getNextSelectedPiece';
import getCurrentGame from './../../utils/getCurrentGame';

export const handleDown = () => (dispatch, getState) => {
    const state = getState();
    const currentGame = getCurrentGame(state);
    
    if(currentGame.get('phase') === 'pieceSelection') {
        dispatch(getNextSelectedPiece('down'));
    } else {
        dispatch(getNextSelectedCard('down'));
    }
};