export const resendVerificationEmailCleared = state => state
    .set('loading', false)
    .set('loaded', false)
    .set('failed', false);