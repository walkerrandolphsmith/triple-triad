export default (state, payload) => {
    let nextState = state.set('signingIn', false);
    nextState = nextState.setIn('user.username'.split('.'), null);
    nextState = nextState.setIn('user.id'.split('.'), null);
    return nextState.set('signInError', payload.error);
};