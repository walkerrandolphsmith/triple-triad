export const getGamesFailed = state => state
    .setIn('getGames.failed'.split('.'), true)
    .setIn('getGames.loading'.split('.'), false)
    .setIn('getGames.loaded'.split('.'), false);