export const cardPlaced = state => {
    let newGames = state.get('games').update(
        state.get('games').findIndex(
            game => game.get('id') === state.get('gameRoute')
        ),
        game => {
            let deck = game.get('deck');

            deck = deck.update(
                deck.findIndex(
                    card => card.get('id') === game.get('selectedCard')
                ),
                card => card.set('boardIndex', game.get('selectedPiece'))
            );
            return game.set('deck', deck);
        }
    );
    return state.set('games', newGames);
};
