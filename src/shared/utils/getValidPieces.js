import { List } from 'immutable';

export const getValidPieces = board => {
    let boardIndexes = board.map(card => card.get('boardIndex'));
    return new List([0, 1, 2, 3, 4, 5, 6, 7, 8]).filter(index => boardIndexes.indexOf(index) < 0);
};