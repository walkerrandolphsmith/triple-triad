import WINNER from './../constants/winner';

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
};