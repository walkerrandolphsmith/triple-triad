export const getScoreForOwner = (deck, owner) => {
    return deck.filter(card => card.get('owner') === owner).size
};

export const getScore = (blue, red) => ({ blue: blue, red: red });