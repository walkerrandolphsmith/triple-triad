export default (state, payload) => {
    let deck =  state.get('deck');

    deck = deck.update(
        deck.findIndex(
            card => card.get('boardIndex') === payload.index
        ),
        card => card.set('owner', payload.owner)
    );

    return state.set('deck', deck);
}