import { List } from 'immutable';
import { convertToGameRecord } from './../records';

export const getGamesSucceeded = (state, payload) => {
    const games = payload.games.map(game => convertToGameRecord(game));
    return state
        .setIn('getGames.failed'.split('.'), false)
        .setIn('getGames.loading'.split('.'), false)
        .setIn('getGames.loaded'.split('.'), true)
        .set('games', new List(games));
};