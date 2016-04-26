import { getNextCardForHand } from './../getNextCardForHand/getNextCardForHand';
import { getNextSelectedPiece } from './../getNextSelectedPiece/getNextSelectedPiece';
import { currentGameSelector } from './../../../selectors/currentGame/currentGameSelector';

export const handleLeft = () => (dispatch, getState) => {
    const currentGame = currentGameSelector(getState());

    let cases = {
        'handSelection': () => {
            dispatch(getNextCardForHand('left'));
        },
        'pieceSelection': () => {
            dispatch(getNextSelectedPiece('left'));
        }
    };

    cases[currentGame.get('phase')]();
};