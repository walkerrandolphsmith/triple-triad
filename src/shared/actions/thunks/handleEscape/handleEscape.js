import { setPhase, selectPiece } from './../../action-creators';
import { currentGameSelector } from './../../../selectors/currentGame/currentGameSelector';

export const handleEscape = () => (dispatch, getState) => {
    const currentGame = currentGameSelector(getState());
    if(isPieceSelectionPhase(currentGame)) {
        dispatch(setPhase('cardSelection'));
        dispatch(selectPiece(-1));
    }
};

function isPieceSelectionPhase(currentGame) {
    return currentGame.get('phase') === 'pieceSelection';
}