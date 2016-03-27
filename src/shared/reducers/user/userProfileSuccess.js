export default (state, payload) => state
    .set('loading', false)
    .set('loaded', true)
    .setIn('user.verified'.split('.'), payload.user.verified);