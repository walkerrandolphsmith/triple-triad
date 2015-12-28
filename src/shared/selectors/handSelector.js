export const getHand = (deck, owner) => {
    return deck.reduce((hand, card) => { if(card.owner === owner && !card.isOnBoard) hand.push(card); return hand; }, [])
}