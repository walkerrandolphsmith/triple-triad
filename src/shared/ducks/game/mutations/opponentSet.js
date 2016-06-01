export const opponentSet = (state, payload) => {
    let newGames = state.get('games').update(
        state.get('games').findIndex(
            game => game.id === state.get('gameRoute')
        ),
        game => game.set('opponent', payload.playerId)
    );
    return state.set('games', newGames);
};