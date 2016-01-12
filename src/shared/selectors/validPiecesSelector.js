export const getValidPieces = board => {
    let boardIndexes = board.map(card => card.boardIndex);
    return [0,1,2,3,4,5,6,7,8].filter(index => boardIndexes.indexOf(index) < 0);
};