export const getHand = (deck, owner) => {
    return deck.reduce((hand, card) => { if(card.owner === owner) hand.push(card); return hand; }, [])
}