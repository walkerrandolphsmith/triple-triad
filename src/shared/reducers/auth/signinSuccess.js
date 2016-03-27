export default (state, payload) => {
    let nextState = state.set('signingIn', true);
    nextState = nextState.setIn('user.username'.split('.'), payload.user.name);
    return nextState.setIn('user.id'.split('.'), payload.user.id);
};