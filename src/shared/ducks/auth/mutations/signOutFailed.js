export const signOutFailed = (state, payload) => state
    .set('signingOut', false)
    .set('signOutError', payload.error);