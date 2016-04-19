export default state => {
    let nextState = state.setIn('newGame.failed'.split('.'), true);
    nextState = nextState.setIn('newGame.loading'.split('.'), false);
    return nextState.setIn('newGame.loaded'.split('.'), false);
};