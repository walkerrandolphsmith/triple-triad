export const getBoard = (deck) => {
    return deck.filter(card => card.boardIndex >= 0);
};