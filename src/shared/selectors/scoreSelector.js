import _ from 'lodash';
import WINNER from './../constants/winner';

export const getBlueScore = (hand, board) => { return _.compact(hand.concat(board)).reduce((x, y) => { return y.owner === 0 ? x + 1 : x; }, 0)}

export const getRedScore = (hand, board) => { return _.compact(hand.concat(board)).reduce((x, y) => { return y.owner === 1 ? x + 1 : x; }, 0)}

export const getScore = (blue, red) => ({ blue: blue, red: red })

export const getValidPieces = board => { return board.reduce((validPieces, piece, index) => { if(!piece) validPieces.push(index); return validPieces }, []); }

export const getWinner = (score, validPieces) => {
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