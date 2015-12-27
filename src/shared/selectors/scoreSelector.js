import { createSelector } from 'reselect';
import _ from 'lodash';

const handSelector = state => state.hand
const opponentHandSelector = state => state.opponentHand
const boardSelector = state => state.board

const blueScoreSelector = createSelector(
    [handSelector, boardSelector],
    (hand, board) => { return _.compact(hand.concat(board)).reduce((x, y) => { return y.owner === 0 ? x + 1 : x; }, 0)}
);

const redScoreSelector = createSelector(
    [opponentHandSelector, boardSelector],
    (hand, board) => { return _.compact(hand.concat(board)).reduce((x, y) => { return y.owner === 1 ? x + 1 : x; }, 0)}
);

export const scoreSelector = createSelector(
    [blueScoreSelector, redScoreSelector],
    (blue, red) => ({ blue: blue, red: red })
);

export const validPiecesSelector = createSelector(
    [boardSelector],
    board => { return board.reduce((validPieces, piece, index) => { if(!piece) validPieces.push(index); return validPieces }, []); }
);

/*const winnerSelector = createSelector(
    [scoreSelector, gameOverSelector],
    (score, gameOver) => { gameOver ? score : undefined }
);*/