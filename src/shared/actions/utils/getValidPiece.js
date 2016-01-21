import sample from './sample';
import { getBoard } from './../../selectors/boardSelector';
import { getValidPieces } from './../../selectors/validPiecesSelector';

export function getValidPiece(game){
    const board = getBoard(game.get('deck'));
    console.log(board);
    let validPieces = getValidPieces(board);
    console.log(validPieces);
    return validPieces.size > 0 ? sample(validPieces) : -1;
}
