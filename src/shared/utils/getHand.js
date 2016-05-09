export const getHand = (deck, owner) => deck.filter(card => card.get('owner') === owner && card.get('boardIndex') < 0);