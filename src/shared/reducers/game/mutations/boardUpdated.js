export const boardUpdated = (state, payload) => {
    let newGames = state.get('games').update(
        state.get('games').findIndex(
            game => game.get('id') === state.get('gameRoute')
        ),
        game => {
            let deck = game.get('deck');

            deck = deck.update(
                deck.findIndex(
                    card => card.get('boardIndex') === payload.index
                ),
                card => card.set('owner', payload.owner)
            );
            return game.set('deck', deck);
        }
    );

    return state.set('games', newGames);
};