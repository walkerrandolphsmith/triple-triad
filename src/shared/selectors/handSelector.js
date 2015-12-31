export const getHand = (deck, board, owner) => {
    return deck.reduce((hand, card) => {
        if(card.owner === owner && !board.find(c => { return c && c.id === card.id }))
            hand.push(card);
        return hand;
    }, [])
};