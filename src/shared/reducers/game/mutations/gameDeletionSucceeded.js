export const gameDeletionSucceeded = (state, payload) => state.set('games', state.get('games').filter(game => game.get('id') !== payload.gameId));