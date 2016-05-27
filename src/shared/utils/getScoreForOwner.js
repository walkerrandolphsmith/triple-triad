export const getScoreForOwner = (deck, owner) => {
    return deck.filter(card => card.owner === owner).size;
};