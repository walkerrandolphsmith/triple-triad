export const currentGameSelector = state => state.game.get('games').find(game => game.get('id') === state.game.get('gameRoute'));