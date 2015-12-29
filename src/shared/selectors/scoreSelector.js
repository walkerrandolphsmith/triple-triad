import _ from 'lodash';

export const getScoreForOwner = (hand, board, owner) => { return _.compact(hand.concat(board)).reduce((x, y) => { return y.owner === owner ? x + 1 : x; }, 0)}

export const getScore = (blue, red) => ({ blue: blue, red: red })