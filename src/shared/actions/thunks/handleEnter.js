import { setPhase, selectPiece } from './../action-creators';
import { getNextSelectedPiece } from './getNextSelectedPiece';
import { playerTakesTurn } from './playerTakesTurn';
import { updateRoute } from './updateRoute';
import { addCard, updateSettings } from './../action-creators';
import { getHand } from './../../selectors/handSelector';
import { getIsFullHand } from './../../selectors/isFullHandSelector';

export const handleEnter = () => (dispatch, getState) => {
    const state = getState();

    switch(state.game.get('phase')){
        case 'settingsSelection':
            const focusedSetting = state.settings.get('focused');
            if(focusedSetting !== -1)
                dispatch(updateSettings(focusedSetting));
            break;
        case 'handSelection':
            const id = state.game.get('selectedCard');
            const deck = state.game.get('deck').toJS();
            const hand = getHand(deck, 1);
            const isOwned = hand.find(card => card.id === id);
            const owner = isOwned ? 0 : 1;
            if(!getIsFullHand(hand))
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