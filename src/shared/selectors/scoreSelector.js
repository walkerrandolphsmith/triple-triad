export const getScoreForOwner = (hand, board, owner) => { return hand.concat(board).filter(x => x).reduce((x, y) => { return y.owner === owner ? x + 1 : x; }, 0)}

export const getScore = (blue, red) => ({ blue: blue, red: red })