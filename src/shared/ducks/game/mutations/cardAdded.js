export const cardAdded = (state, payload) => {
    let newGames = state.get('games').update(
        state.get('games').findIndex(
            game => game.id === state.get('gameRoute')
        ),
        game => {
            let deck = game.deck;

            deck = deck.update(
                deck.findIndex(
                    card => card.id === payload.id
                ),
                card => card.set('owner', payload.owner)
            );
            return game.set('deck', deck);
        }
    );
    return state.set('games', newGames);
};