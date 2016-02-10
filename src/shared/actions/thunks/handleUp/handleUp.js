import { getNextSelectedCard } from './../getNextSelectedCard/getNextSelectedCard';
import { getNextSelectedPiece } from './../getNextSelectedPiece/getNextSelectedPiece';

export const handleUp = () => (dispatch, getState) => {
    const state = getState();

    if(state.game.get('phase') === 'pieceSelection'){
        dispatch(getNextSelectedPiece('up'));
    }else{
        dispatch(getNextSelectedCard('up'));
    }
};