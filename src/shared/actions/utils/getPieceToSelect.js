import { getBoard } from './../../selectors/boardSelector';
import { getValidPieces } from './../../selectors/validPiecesSelector';

export function getPieceToSelect(game, keyCode){
    const board = getBoard(game.get('deck').toJS());
    const validPieces = getValidPieces(board);
    const selectedPiece = game.get('selectedPiece');
    return selectedPiece === -1 ? validPieces[0] : selectedPiece;
}