export default state => {
    let deck = state.get('deck');

    deck = deck.update(
        deck.findIndex(
            card => card.get('id') === state.get('selectedCard')
        ),
        card => card.set('boardIndex', state.get('selectedPiece'))
    );

    return state.set('deck', deck);
}