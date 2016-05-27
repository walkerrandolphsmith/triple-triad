export const cardPlaced = state => {
    let newGames = state.get('games').update(
        state.get('games').findIndex(
            game => game.id === state.get('gameRoute')
        ),
        game => {
            let deck = game.deck;

            deck = deck.update(
                deck.findIndex(
                    card => card.id === game.selectedCard
                ),
                card => card.set('boardIndex', game.selectedPiece)
            );
            return game.set('deck', deck);
        }
    );
    return state.set('games', newGames);
};
