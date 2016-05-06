export const userProfileSucceeded = (state, payload) => state
    .set('loaded', true)
    .set('loading', false)
    .set('failed', false)
    .setIn('user.verified'.split('.'), payload.user.verified);