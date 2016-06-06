import PHASE from './../../../constants/phases';
import { setPhase } from './../actions/setPhase';
import { setCurrentGame } from './../actions/setCurrentGame';
import { setOpponent } from './../actions/setOpponent';
import { selectNextCard } from './selectNextCard';
import { setHands } from './setHands';
import { currentGameSelector } from './../index';
import { push } from 'react-router-redux';

export const endPhaseInvitationHold = (gameId, invitationToken) => (dispatch, getState) => {
    dispatch(setCurrentGame(gameId));
    const state = getState();
    const game = currentGameSelector(state);

    if(game.accepted === invitationToken) {
        const loggedInPlayer = state.auth.get('user').id;
        dispatch(setOpponent(loggedInPlayer));
        if(game.settings.randomHand) {
            dispatch(setPhase(PHASE.CARD_SELECTION));
            dispatch(setHands());
            dispatch(selectNextCard('deck'));
        } else {
            dispatch(setPhase(PHASE.HAND_SELECTION));
            dispatch(selectNextCard('hand'));
        }
        dispatch(push(`game/${gameId}`));
    }
};