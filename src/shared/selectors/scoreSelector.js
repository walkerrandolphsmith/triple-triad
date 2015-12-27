import { createSelector } from 'reselect';
import _ from 'lodash';
import WINNER from './../constants/winner';

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

export const winnerSelector = createSelector(
    [scoreSelector, validPiecesSelector],
    (score, validPieces) => {
        let winner = WINNER.NONE;
        if(validPieces.length <= 0){
            if(score.blue === score.red){
                winner = WINNER.TIE
            }else{
                winner = score.blue > score.red ? WINNER.BLUE : WINNER.RED
            }
        }
        return winner;
    }
);