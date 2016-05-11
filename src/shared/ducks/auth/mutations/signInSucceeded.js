export const signInSucceeded = (state, payload) => state
    .set('signingIn', true)
    .setIn('user.username'.split('.'), payload.user.name)
    .setIn('user.email'.split('.'), payload.user.email)
    .setIn('user.isVerified'.split('.'), payload.user.isVerified)
    .setIn('user.id'.split('.'), payload.user.id);