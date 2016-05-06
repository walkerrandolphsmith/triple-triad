export const signUpFailed = state => state
    .set('signingUp', false)
    .setIn('user.username'.split('.'), null)
    .setIn('user.id'.split('.'), null);