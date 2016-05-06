export const passwordResetFailed = state => state
    .set('failed', true)
    .set('loaded', false)
    .set('loading', false);