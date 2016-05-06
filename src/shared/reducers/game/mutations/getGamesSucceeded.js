import { List, Map } from 'immutable';

export const getGamesSucceeded = (state, payload) => {
    let games = payload.games.map(game => new Map(game));
    return state
        .setIn('getGames.failed'.split('.'), false)
        .setIn('getGames.loading'.split('.'), false)
        .setIn('getGames.loaded'.split('.'), true)
        .set('games', new List(games));
};