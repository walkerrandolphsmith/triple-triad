import { getNextCardForHand } from './../getNextCardForHand/getNextCardForHand';
import { getNextSelectedPiece } from './../getNextSelectedPiece/getNextSelectedPiece';

export const handleRight = () => (dispatch, getState) => {
    const state = getState();

    switch(state.game.get('phase')) {
        case 'handSelection':
            dispatch(getNextCardForHand('right'));
            break;
        case 'pieceSelection':
            dispatch(getNextSelectedPiece('right'));
            break;
        default: return;
    }
};