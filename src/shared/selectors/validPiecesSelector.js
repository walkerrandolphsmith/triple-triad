export const getValidPieces = board => {
    return board.reduce((pieces, card, i) => { if(!card) pieces.push(i); return pieces }, []);
};