export default (state, payload) => {
    let nextState = state.setIn('newGame.failed'.split('.'), false);
    nextState = nextState.setIn('newGame.loading'.split('.'), false);
    nextState = nextState.setIn('newGame.loaded'.split('.'), true);
    return nextState.set('games', state.get('games').push(payload.game));
};