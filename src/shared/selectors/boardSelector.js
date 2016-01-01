export const getBoard = (deck) => {

    let board = deck.filter(card => card.boardIndex >= 0);
    var cards = [];
    for(var i = 0; i < 9; i++){
        cards[i] = null;
        board.forEach(card => { if(card.boardIndex === i) cards[i] = card });
    }

    return cards;
};