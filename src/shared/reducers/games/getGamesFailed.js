export default state => {
    let nextState = state.setIn('getGames.failed'.split('.'), true);
    nextState = nextState.setIn('getGames.loaded'.split('.'), false);
    return nextState.setIn('getGames.loading'.split('.'), false);
};