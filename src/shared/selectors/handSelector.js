import _ from 'lodash';

export const getHand = (deck, board, owner) => {
    return deck.reduce((hand, card) => { if(card.owner === owner && !_.contains(board, card)) hand.push(card); return hand; }, [])
}