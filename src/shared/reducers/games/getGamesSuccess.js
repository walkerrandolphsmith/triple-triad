import { List } from 'immutable';

export default (state, payload) => {
    let nextState = state.setIn('getGames.failed'.split('.'), false);
    nextState = nextState.setIn('getGames.loading'.split('.'), false);
    nextState = nextState.setIn('getGames.loaded'.split('.'), true);
    return nextState.set('games', new List(payload.games));
};