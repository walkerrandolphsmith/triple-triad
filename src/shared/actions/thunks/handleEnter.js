import { setPhase } from './../action-creators';
import { getNextSelectedPiece } from './getNextSelectedPiece';

export const handleEnter = () => (dispatch, getState) => {
    const state = getState();

    if(state.game.get('phase') === 'cardSelection'){
        dispatch(setPhase('pieceSelection'));
        dispatch(getNextSelectedPiece());
    }else{

    }
};