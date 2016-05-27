export const pieceSelected = (state, payload) => {
    let newGames = state.get('games').update(
        state.get('games').findIndex(
            game => game.id === state.get('gameRoute')
        ),
        game => game.set('selectedPiece', payload.index)
    );
    return state.set('games', newGames);
};