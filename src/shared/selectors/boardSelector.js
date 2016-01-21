export const getBoard = (deck) => {
    return deck.filter(card => card.get('boardIndex') >= 0);
};