import { getNextCardForHand } from './../getNextCardForHand/getNextCardForHand';
import { getNextSelectedPiece } from './../getNextSelectedPiece/getNextSelectedPiece';
import { currentGameSelector } from './../../../selectors/currentGame/currentGameSelector';

export const handleRight = () => (dispatch, getState) => {
    const currentGame = currentGameSelector(getState());
    switch(currentGame.get('phase')) {
        case 'handSelection':
            dispatch(getNextCardForHand('right'));
            break;
        case 'pieceSelection':
            dispatch(getNextSelectedPiece('right'));
            break;
        default: return;
    }
};