import { setPhase, selectPiece } from './../../action-creators';
import { currentGameSelector } from './../../../selectors/currentGame/currentGameSelector';
import PHASE from './../../../constants/phases';

export const handleEscape = () => (dispatch, getState) => {
    const currentGame = currentGameSelector(getState());

    let cases = {
        [PHASE.PIECE_SELECTION]: () => {
            dispatch(setPhase(PHASE.CARD_SELECTION));
            dispatch(selectPiece(-1));
        }
    };

    cases[currentGame.get('phase')]();
};