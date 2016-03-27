export default state => {
    let nextState = state.set('signingUp', false);
    nextState = nextState.setIn('user.username'.split('.'), null);
    return nextState.setIn('user.id'.split('.'), null);
};