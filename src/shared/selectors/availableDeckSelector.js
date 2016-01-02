export const getAvailableDeck = (deck) => {
    let unique = {}, distinct = [];
    for(var i = 0; i < deck.length; i++){
       if(!unique[deck[i].name])
        distinct.push(deck[i]);
       unique[deck[i].name] = true;
    }
    return distinct;
};