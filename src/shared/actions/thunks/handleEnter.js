import { setPhase, selectPiece } from './../action-creators';
import { getNextSelectedPiece } from './getNextSelectedPiece';
import { playerTakesTurn } from './playerTakesTurn';
import { addCard } from './../action-creators';

export const handleEnter = () => (dispatch, getState) => {
    const state = getState();

    switch(state.game.get('phase')){
        case 'handSelection':
            let id = state.game.get('selectedCard');
            let card = state.game.get('deck').find(card => card.get('id') === id);
            let owner = card.get('owner') === 1 ? 0 : 1;
            dispatch(addCard(id, owner));
            break;
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