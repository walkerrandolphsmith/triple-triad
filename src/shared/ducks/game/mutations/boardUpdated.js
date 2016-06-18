export const boardUpdated = (state, payload) => {
    let newGames = state.get('games').update(
        state.get('games').findIndex(
            game => game.id === state.get('gameRoute')
        ),
        game => {
            let deck = game.deck;

            deck = deck.update(
                deck.findIndex(
                    card => card.boardIndex === payload.index
                ),
                card => {
                    return card
                        .set('owner', payload.owner)
                        .set('flipDirection', payload.flipDirection)
                }
            );
            return game.set('deck', deck);
        }
    );

    return state.set('games', newGames);
};