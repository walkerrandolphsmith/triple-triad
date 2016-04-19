export default (state, payload) => {
    let newGames = state.get('games').update(
        state.get('games').findIndex(
            game => game.get('id') === state.get('gameRoute')
        ),
        game => game.set('selectedPiece', payload.index)
    );
    return state.set('games', newGames);
}