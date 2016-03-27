export default state => {
    state = state.setIn('newGame.failed'.split('.'), true);
    state = state.setIn('newGame.loading'.split('.'), false);
    return state.setIn('newGame.loaded'.split('.'), false);
};