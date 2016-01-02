export const getAvailableDeck = (deck, owner) => {
    let unique = {}, distinct = [];
    for(var i = 0; i < deck.length; i++){
       if(!unique[deck[i].name] && deck[i].owner !== owner) {
           distinct.push(deck[i]);
           unique[deck[i].name] = true;
       }
    }
    return distinct;
};