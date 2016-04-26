import { getNextCardForHand } from './../getNextCardForHand/getNextCardForHand';
import { getNextSelectedPiece } from './../getNextSelectedPiece/getNextSelectedPiece';
import { currentGameSelector } from './../../../selectors/currentGame/currentGameSelector';

export const handleLeft = () => (dispatch, getState) => {
    const currentGame = currentGameSelector(getState());
    switch(currentGame.get('phase')) {
        case 'handSelection':
            dispatch(getNextCardForHand('left'));
            break;
        case 'pieceSelection':
            dispatch(getNextSelectedPiece('left'));
            break;
        default: return;
    }
};