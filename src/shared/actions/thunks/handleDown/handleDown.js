import { getNextSelectedCard } from './../getNextSelectedCard/getNextSelectedCard';
import { getNextSelectedPiece } from './../getNextSelectedPiece/getNextSelectedPiece';

export const handleDown = () => (dispatch, getState) => {
    const state = getState();

    if(state.game.get('phase') === 'pieceSelection'){
        dispatch(getNextSelectedPiece('down'));
    }else{
        dispatch(getNextSelectedCard('down'));
    }
};