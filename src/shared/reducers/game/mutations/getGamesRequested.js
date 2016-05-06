export const getGamesRequested = state => state
    .setIn('getGames.failed'.split('.'), false)
    .setIn('getGames.loading'.split('.'), true)
    .setIn('getGames.loaded'.split('.'), false);