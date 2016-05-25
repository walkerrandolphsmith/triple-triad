import { convertGame } from './../../../utils/convertGameToImmutable';

export const createGameSucceeded = (state, payload) => {
    const game = convertGame(payload.game);
    return state
        .setIn('newGame.failed'.split('.'), false)
        .setIn('newGame.loading'.split('.'), false)
        .setIn('newGame.loaded'.split('.'), true)
        .set('games', state.get('games').push(game));
};