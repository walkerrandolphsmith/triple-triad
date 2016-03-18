export default (state, payload) => {
    state = state.set('signingIn', false);
    state = state.setIn('user.username'.split('.'), null);
    state = state.setIn('user.id'.split('.'), null);
    return state.set('signInError', payload.error);
}