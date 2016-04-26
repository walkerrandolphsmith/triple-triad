import { getNextCardForHand } from './../getNextCardForHand/getNextCardForHand';
import { getNextSelectedPiece } from './../getNextSelectedPiece/getNextSelectedPiece';
import { currentGameSelector } from './../../../selectors/currentGame/currentGameSelector';

export const handleRight = () => (dispatch, getState) => {
    const currentGame = currentGameSelector(getState());

    let cases = {
        'handSelection': () => {
            dispatch(getNextCardForHand('right'));
        },
        'pieceSelection': () => {
            dispatch(getNextSelectedPiece('right'));
        }
    };

    cases[currentGame.get('phase')]();
};