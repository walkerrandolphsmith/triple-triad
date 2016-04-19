import { getNextCardForHand } from './../getNextCardForHand/getNextCardForHand';
import { getNextSelectedPiece } from './../getNextSelectedPiece/getNextSelectedPiece';
import getCurrentGame from './../../utils/getCurrentGame';

export const handleRight = () => (dispatch, getState) => {
    const state = getState();
    const currentGame = getCurrentGame(state);

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