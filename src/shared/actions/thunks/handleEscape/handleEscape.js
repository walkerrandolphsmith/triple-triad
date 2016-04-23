import { setPhase, selectPiece } from './../../action-creators';
import getCurrentGame from './../../utils/getCurrentGame';

export const handleEscape = () => (dispatch, getState) => {
    const currentGame = getCurrentGame(getState());
    if(isPieceSelectionPhase(currentGame)) {
        dispatch(setPhase('cardSelection'));
        dispatch(selectPiece(-1));
    }
};

function isPieceSelectionPhase(currentGame) {
    return currentGame.get('phase') === 'pieceSelection';
}