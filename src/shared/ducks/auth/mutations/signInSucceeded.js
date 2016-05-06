export const signInSucceeded = (state, payload) => state
    .set('signingIn', true)
    .setIn('user.username'.split('.'), payload.user.name)
    .setIn('user.id'.split('.'), payload.user.id);