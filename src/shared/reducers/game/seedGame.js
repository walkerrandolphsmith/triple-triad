import { fromJS } from 'immutable';

export default (state, payload) => {
    let nextState = state.set('gameId', payload.game._id);
    nextState = nextState.set('owner', payload.game.owner);
    nextState = nextState.set('deck', fromJS(payload.game.deck));
    nextState = nextState.set('phase', payload.game.phase);
    nextState = nextState.set('accepted', payload.game.accepted);
    return nextState.set('currentPlayer', payload.game.currentPlayer);
};