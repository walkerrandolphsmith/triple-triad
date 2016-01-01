export const getCardSelected = (deck) => {
    return deck.filter(card => card.isSelected).length > 0;
};