export default state => state
    .setIn('passwordReset.failed'.split('.'), false)
    .setIn('passwordReset.loaded'.split('.'), false)
    .setIn('passwordReset.loading'.split('.'), true);