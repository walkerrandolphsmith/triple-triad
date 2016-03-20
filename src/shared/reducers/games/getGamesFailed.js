export default (state, payload) => {
    state = state.setIn('getGames.failed'.split('.'), true);
    state = state.setIn('getGames.loaded'.split('.'), false);
    return state.setIn('getGames.loading'.split('.'), false);
}