export const signInFailed = (state, payload) => state
    .set('signingIn', false)
    .setIn('user.username'.split('.'), null)
    .setIn('user.id'.split('.'), null)
    .set('signInError', payload.error);