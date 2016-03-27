import { fromJS } from 'immutable';

export default (state, payload) => {
    state = state.set('gameId', payload.game._id);
    state = state.set('owner', payload.game.owner);
    state = state.set('deck', fromJS(payload.game.deck));
    state = state.set('phase', payload.game.phase);
    state = state.set('accepted', payload.game.accepted);
    return state.set('currentPlayer', payload.game.currentPlayer);
};