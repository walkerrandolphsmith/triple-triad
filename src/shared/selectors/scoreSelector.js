export const getScoreForOwner = (deck, owner) => {
    return deck.filter(card => card.owner === owner).length
};

export const getScore = (blue, red) => ({ blue: blue, red: red });