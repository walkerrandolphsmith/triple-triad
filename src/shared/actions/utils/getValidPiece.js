import sample from './sample';
import { getBoard } from './../../selectors/boardSelector';
import { getValidPieces } from './../../selectors/validPiecesSelector';

export function getValidPiece(game){
    const board = getBoard(game.get('deck').toJS());
    let validPieces = getValidPieces(board);
    return validPieces.length > 0 ? sample(validPieces) : -1;
}
