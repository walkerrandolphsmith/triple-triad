import { getNextCardForHand } from './../getNextCardForHand/getNextCardForHand';
import { getNextSelectedPiece } from './../getNextSelectedPiece/getNextSelectedPiece';

export const handleLeft = () => (dispatch, getState) => {
    const state = getState();

    switch(state.game.get('phase')){
        case 'handSelection':
            dispatch(getNextCardForHand('left'));
            break;
        case 'pieceSelection':
            dispatch(getNextSelectedPiece('left'));
            break;
    }
};