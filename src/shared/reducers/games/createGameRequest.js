export default (state, payload) => {
    state = state.setIn('newGame.failed'.split('.'), false);
    state = state.setIn('newGame.loading'.split('.'), true);
    return state.setIn('newGame.loaded'.split('.'), false);
}