export const resendVerificationEmailRequested = state => state
    .set('loading', true)
    .set('loaded', false)
    .set('failed', false);