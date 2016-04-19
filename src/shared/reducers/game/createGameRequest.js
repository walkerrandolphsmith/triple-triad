export default state => {
    let nextState = state.setIn('newGame.failed'.split('.'), false);
    nextState = nextState.setIn('newGame.loading'.split('.'), true);
    return nextState.setIn('newGame.loaded'.split('.'), false);
};