export const getBoard = (deck) => {
    let cards = deck.filter(card => card.boardIndex >= 0);
    return [0,1,2,3,4,5,6,7,8].reduce((board, i) => {
        board.push(cards.find(card => card.boardIndex === i) || null);
        return board;
    }, []);
};