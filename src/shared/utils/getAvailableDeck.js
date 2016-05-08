import { List } from 'immutable';

export const getAvailableDeck = (deck, owner) => {
    let unique = {};
    let distinct = [];
    let i;
    for(i = 0; i < deck.size; i++) {
        if(!unique[deck.get(i).get('name')] && deck.get(i).get('owner') !== owner) {
            distinct.push(deck.get(i));
            unique[deck.get(i).get('name')] = true;
        }
    }
    return new List(distinct);
};