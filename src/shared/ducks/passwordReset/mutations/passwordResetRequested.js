export const passwordResetRequested = state => state
    .set('failed', false)
    .set('loaded', false)
    .set('loading', true);