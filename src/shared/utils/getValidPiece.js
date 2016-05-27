import { getBoard } from './getBoard';
import { getValidPieces } from './getValidPieces';
import { sample } from './sample';

export function getValidPiece(game) {
    const board = getBoard(game.deck);
    let validPieces = getValidPieces(board);
    return validPieces.size > 0 ? sample(validPieces) : -1;
}
