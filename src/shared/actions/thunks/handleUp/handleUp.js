import { getNextSelectedCard } from './../getNextSelectedCard/getNextSelectedCard';
import { getNextSelectedPiece } from './../getNextSelectedPiece/getNextSelectedPiece';
import getCurrentGame from './../../utils/getCurrentGame';

export const handleUp = () => (dispatch, getState) => {
    const state = getState();
    const currentGame = getCurrentGame(state);

    if(currentGame.get('phase') === 'pieceSelection') {
        dispatch(getNextSelectedPiece('up'));
    } else {
        dispatch(getNextSelectedCard('up'));
    }
};