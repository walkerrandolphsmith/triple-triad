export const signOutSucceeded = state => state
    .set('signingOut', false)
    .setIn('user.username'.split('.'), null)
    .setIn('user.id'.split('.'), null);