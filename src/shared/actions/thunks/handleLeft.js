import { getNextSelectedPiece } from './getNextSelectedPiece';

export const handleLeft = () => (dispatch, getState) => {
    const state = getState();

    if(state.game.get('phase') === 'pieceSelection'){
        dispatch(getNextSelectedPiece('left'));
    }else{

    }
};