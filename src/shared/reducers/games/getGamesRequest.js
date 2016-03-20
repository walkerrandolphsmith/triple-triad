export default (state, payload) => {
    state = state.setIn('getGames.failed'.split('.'), false);
    state = state.setIn('getGames.loading'.split('.'), true);
    return state.setIn('getGames.loaded'.split('.'), false);
}