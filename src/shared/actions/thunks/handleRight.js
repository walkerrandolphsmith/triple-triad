import { getNextSelectedPiece } from './getNextSelectedPiece';

export const handleRight = () => (dispatch, getState) => {
    const state = getState();

    if(state.game.get('phase') === 'pieceSelection'){
        dispatch(getNextSelectedPiece('right'));
    }else{

    }
};