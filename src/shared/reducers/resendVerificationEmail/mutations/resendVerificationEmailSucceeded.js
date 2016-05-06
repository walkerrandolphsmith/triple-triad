export const resendVerificationEmailSucceeded = state => state
    .set('loading', false)
    .set('loaded', true)
    .set('failed', false);