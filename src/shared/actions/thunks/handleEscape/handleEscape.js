import { setPhase, selectPiece } from './../../action-creators';
import { currentGameSelector } from './../../../selectors/currentGame/currentGameSelector';

export const handleEscape = () => (dispatch, getState) => {
    const currentGame = currentGameSelector(getState());

    let cases = {
        'pieceSelection': () => {
            dispatch(setPhase('cardSelection'));
            dispatch(selectPiece(-1));
        }
    };

    cases[currentGame.get('phase')]();
};