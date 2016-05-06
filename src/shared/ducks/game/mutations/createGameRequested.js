export const createGameRequested = state => state
    .setIn('newGame.failed'.split('.'), false)
    .setIn('newGame.loading'.split('.'), true)
    .setIn('newGame.loaded'.split('.'), false);