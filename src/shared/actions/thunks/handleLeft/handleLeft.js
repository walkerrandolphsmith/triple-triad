import { getNextCardForHand } from './../getNextCardForHand/getNextCardForHand';
import { getNextSelectedPiece } from './../getNextSelectedPiece/getNextSelectedPiece';
import getCurrentGame from './../../utils/getCurrentGame';

export const handleLeft = () => (dispatch, getState) => {
    const currentGame = getCurrentGame(getState());
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