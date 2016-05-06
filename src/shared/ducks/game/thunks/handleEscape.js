import PHASE from './../../../constants/phases';
import { setPhase, selectPiece, currentGameSelector } from './../index';

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