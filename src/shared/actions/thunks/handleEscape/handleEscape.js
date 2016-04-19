import { setPhase, selectPiece } from './../../action-creators';
import getCurrentGame from './../../utils/getCurrentGame';

export const handleEscape = () => (dispatch, getState) => {
    const state = getState();
    const currentGame = getCurrentGame(state);

    if(currentGame.get('phase') === 'pieceSelection') {
        dispatch(setPhase('cardSelection'));
        dispatch(selectPiece(-1));
    }
};