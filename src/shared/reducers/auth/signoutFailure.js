export default (state, payload) => {
    state.set('signingOut', false);
    return state.set('signOutError', payload.error);
};