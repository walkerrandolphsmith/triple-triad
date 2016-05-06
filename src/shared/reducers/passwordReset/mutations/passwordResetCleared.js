export const passwordResetCleared = state => state
    .set('failed', false)
    .set('loaded', false)
    .set('loading', false);