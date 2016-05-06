export const resendVerificationEmailFailed =  state => state
    .set('loading', false)
    .set('loaded', false)
    .set('failed', true);