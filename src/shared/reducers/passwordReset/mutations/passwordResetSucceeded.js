export const passwordResetSucceeded = state => state
    .set('failed', false)
    .set('loaded', true)
    .set('loading', false);