export const currentPlayerMessageShown = (state, payload) => {
    let newGames = state.get('games').update(
        state.get('games').findIndex(
            game => game.get('id') === state.get('gameRoute')
        ),
        game => game.set('currentPlayerMessage', payload.currentPlayer)
    );
    return state.set('games', newGames);
};
