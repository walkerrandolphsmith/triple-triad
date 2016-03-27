export default (state, payload) => {
    state = state.setIn('newGame.failed'.split('.'), false);
    state = state.setIn('newGame.loading'.split('.'), false);
    state = state.setIn('newGame.loaded'.split('.'), true);
    return state.set('games', state.get('games').push(payload.game));
};