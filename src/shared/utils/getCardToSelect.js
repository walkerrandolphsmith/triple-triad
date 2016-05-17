export const getCardToSelect = (selectedCard, cards, directionInLoop) => {
    if(selectedCard === -1) {
        return cards.get(0);
    }

    const i = cards.findIndex(card => card.get('id') === selectedCard);
    let amountToIncrement;
    if(directionInLoop === 'down' || directionInLoop === 'right') {
        amountToIncrement = 1;
    } else {
        amountToIncrement = cards.size - 1;
    }
    return cards.get((i + amountToIncrement) % cards.size);
};