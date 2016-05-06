import PHASE from './../../../constants/phases';
import { updateSetting } from '../..//settings';
import { getNextSelectedPiece } from './getNextSelectedPiece';
import { playerTakesTurn } from './playerTakesTurn';
import { addCard, setPhase, getHand, getIsFullHand, currentGameSelector } from './../index';

export const handleEnter = () => (dispatch, getState) => {
    const state = getState();
    const currentGame = currentGameSelector(state);
    
    let cases = {
        [PHASE.SETTINGS_SELECTION]: () => {
            selectSetting(dispatch, state);
        },
        [PHASE.HAND_SELECTION]: () => {
            selectCardToAddToHand(dispatch, currentGame);
        },
        [PHASE.CARD_SELECTION]: () => {
            dispatch(setPhase(PHASE.PIECE_SELECTION));
            dispatch(getNextSelectedPiece('enter'));
        },
        [PHASE.PIECE_SELECTION]: () => {
            dispatch(playerTakesTurn(true));
            dispatch(setPhase(PHASE.CARD_SELECTION));
        }
    };
    
    cases[currentGame.get('phase')]();
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
        dispatch(updateSetting(focusedSetting));
    }
}

function isAnySettingFocused(focusedSetting) {
    return focusedSetting !== -1;
}