export const userProfileFailed = state => state
    .set('loaded', false)
    .set('loading', false)
    .set('failed', true);
