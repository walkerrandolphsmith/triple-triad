export const userProfileRequested = state => state
    .set('loaded', false)
    .set('loading', true)
    .set('failed', false);