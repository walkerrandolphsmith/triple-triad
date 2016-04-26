import { addCard, updateSettings, setPhase } from './../../action-creators';
import { getNextSelectedPiece } from './../getNextSelectedPiece/getNextSelectedPiece';
import { playerTakesTurn } from './../playerTakesTurn/playerTakesTurn';
import { getHand } from './../../../selectors/hand/handSelector';
import { getIsFullHand } from './../../../selectors/isFullHand/isFullHandSelector';
import { currentGameSelector } from './../../../selectors/currentGame/currentGameSelector';

export const handleEnter = () => (dispatch, getState) => {
    const state = getState();
    const currentGame = currentGameSelector(state);
    
    switch(currentGame.get('phase')) {
        case 'settingsSelection':
            selectSetting(dispatch, state);
            break;
        case 'handSelection':
            selectCardToAddToHand(dispatch, currentGame);
            break;
        case 'cardSelection':
            dispatch(setPhase('pieceSelection'));
            dispatch(getNextSelectedPiece('enter'));
            break;
        case 'pieceSelection':
            dispatch(playerTakesTurn(true));
            dispatch(setPhase('cardSelection'));
            break;
        default: return;
    }
};

function selectCardToAddToHand(dispatch, currentGame) {
    const id = currentGame.get('selectedCard');
    const hand = getHand(currentGame.get('deck'), 1);
    const isOwned = hand.find(card => card.get('id') === id);
    const owner = isOwned ? 0 : 1;
    if(!getIsFullHand(hand) || isOwned) {
        dispatch(addCard(id, owner));
    }
}

function selectSetting(dispatch, state) {
    const focusedSetting = state.settings.get('focused');
    if(isAnySettingFocused(focusedSetting)) {
        dispatch(updateSettings(focusedSetting));
    }
}

function isAnySettingFocused(focusedSetting) {
    return focusedSetting !== -1;
}