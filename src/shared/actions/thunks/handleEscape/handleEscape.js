import { setPhase, selectPiece } from './../../action-creators';

export const handleEscape = () => (dispatch, getState) => {
    const state = getState();

    if(state.game.get('phase') === 'pieceSelection'){
        dispatch(setPhase('cardSelection'));
        dispatch(selectPiece(-1));
    }else{

    }
};