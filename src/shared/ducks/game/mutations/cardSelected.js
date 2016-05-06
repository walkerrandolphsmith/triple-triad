export const cardSelected = (state, payload) => {
    let newGames = state.get('games').update(
        state.get('games').findIndex(
            game => game.get('id') === state.get('gameRoute')
        ),
        game => game.set('selectedCard', payload.id)
    );
    return state.set('games', newGames);
};