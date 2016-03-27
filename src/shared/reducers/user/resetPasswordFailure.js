export default state => state
    .setIn('passwordReset.failed'.split('.'), true)
    .setIn('passwordReset.loaded'.split('.'), false)
    .setIn('passwordReset.loading'.split('.'), false);