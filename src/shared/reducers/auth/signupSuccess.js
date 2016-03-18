export default (state, payload) => {
    state = state.set('signingUp', false);
    state = state.setIn('user.username'.split('.'), payload.user.name);
    return state.setIn('user.id'.split('.'), payload.user.id);
}