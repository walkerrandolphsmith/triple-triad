import _ from 'lodash';

export const getHand = (deck, board, owner) => {
    return deck.reduce((hand, card) => {
        if(card.owner === owner && !_.find(board, c => { return c && c.id === card.id }))
            hand.push(card);
        return hand;
    }, [])
};