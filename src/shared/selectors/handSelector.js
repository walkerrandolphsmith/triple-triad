export const getHand = (deck, owner) => {
    return deck.filter(card => card.owner === owner && card.boardIndex < 0);
};