import _ from 'lodash';

export const getBlueScore = (hand, board) => { return _.compact(hand.concat(board)).reduce((x, y) => { return y.owner === 0 ? x + 1 : x; }, 0)}

export const getRedScore = (hand, board) => { return _.compact(hand.concat(board)).reduce((x, y) => { return y.owner === 1 ? x + 1 : x; }, 0)}

export const getScore = (blue, red) => ({ blue: blue, red: red })