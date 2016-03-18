export default (state, payload) => {
    state = state.set('signingUp', false);
    state = state.setIn('user.username'.split('.'), null);
    return state.setIn('user.id'.split('.'), null);
}