export const getBoard = (deck) => deck.filter(card => card.get('boardIndex') >= 0);