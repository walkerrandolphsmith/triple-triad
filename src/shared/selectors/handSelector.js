export const getHand = (deck, owner) => {
    return deck.filter(card => card.get('owner') === owner && card.get('boardIndex') < 0);
};