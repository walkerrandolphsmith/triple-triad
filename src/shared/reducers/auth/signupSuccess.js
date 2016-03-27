export default (state, payload) => {
    let nextState = state.set('signingUp', false);
    nextState = nextState.setIn('user.username'.split('.'), payload.user.name);
    return nextState.setIn('user.id'.split('.'), payload.user.id);
};