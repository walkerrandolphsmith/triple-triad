export default state => {
    let nextState = state.setIn('getGames.failed'.split('.'), false);
    nextState = nextState.setIn('getGames.loading'.split('.'), true);
    return nextState.setIn('getGames.loaded'.split('.'), false);
};