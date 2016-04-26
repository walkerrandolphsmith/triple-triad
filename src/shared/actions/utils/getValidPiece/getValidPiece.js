import { getBoard } from './../../../selectors/board/boardSelector';
import { getValidPieces } from './../../../selectors/validPieces/validPiecesSelector';
import { sample } from './../../utils';

export function getValidPiece(game) {
    const board = getBoard(game.get('deck'));
    let validPieces = getValidPieces(board);
    return validPieces.size > 0 ? sample(validPieces) : -1;
}
