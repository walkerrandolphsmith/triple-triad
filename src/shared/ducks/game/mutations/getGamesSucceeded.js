import { List } from 'immutable';
import { convertGame } from './../../../utils/convertGameToImmutable';

export const getGamesSucceeded = (state, payload) => {
    const games = payload.games.map(game => convertGame(game));
    return state
        .setIn('getGames.failed'.split('.'), false)
        .setIn('getGames.loading'.split('.'), false)
        .setIn('getGames.loaded'.split('.'), true)
        .set('games', new List(games));
};