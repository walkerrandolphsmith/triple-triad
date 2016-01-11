import { setPhase, selectPiece } from './../action-creators';
import { getNextSelectedPiece } from './getNextSelectedPiece';
import { playerTakesTurn } from './playerTakesTurn';

export const handleEnter = () => (dispatch, getState) => {
    const state = getState();

    switch(state.game.get('phase')){
        case 'cardSelection':
            dispatch(setPhase('pieceSelection'));
            dispatch(getNextSelectedPiece('enter'));
            break;
        case 'pieceSelection':
            dispatch(playerTakesTurn(true));
            dispatch(setPhase('cardSelection'));
            break;
    }
};