export default state => state
    .setIn('passwordReset.failed'.split('.'), false)
    .setIn('passwordReset.loaded'.split('.'), true)
    .setIn('passwordReset.loading'.split('.'), false);
