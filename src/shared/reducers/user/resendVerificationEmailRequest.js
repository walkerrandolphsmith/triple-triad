export default state => state
    .set('resending', true)
    .set('resendingSuccess', false)
    .set('resendingFailure', false);