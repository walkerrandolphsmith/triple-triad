export const createGameFailed = state => state
    .setIn('newGame.failed'.split('.'), true)
    .setIn('newGame.loading'.split('.'), false)
    .setIn('newGame.loaded'.split('.'), false);