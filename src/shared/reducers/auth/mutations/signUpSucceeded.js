export const signUpSucceeded = (state, payload) => state
    .set('signingUp', false)
    .setIn('user.username'.split('.'), payload.user.name)
    .setIn('user.id'.split('.'), payload.user.id);