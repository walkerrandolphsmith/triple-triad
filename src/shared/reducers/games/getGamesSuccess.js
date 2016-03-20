import { List } from 'immutable';

export default (state, payload) => {
    state = state.setIn('getGames.failed'.split('.'), false);
    state = state.setIn('getGames.loading'.split('.'), false);
    state = state.setIn('getGames.loaded'.split('.'), true);
    return state.set('games', new List(payload.games));
}