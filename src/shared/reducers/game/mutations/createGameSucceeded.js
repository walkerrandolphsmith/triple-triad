import { Map } from 'immutable';

export const createGameSucceeded = (state, payload) => state
    .setIn('newGame.failed'.split('.'), false)
    .setIn('newGame.loading'.split('.'), false)
    .setIn('newGame.loaded'.split('.'), true)
    .set('games', state.get('games').push(new Map(payload.game)));