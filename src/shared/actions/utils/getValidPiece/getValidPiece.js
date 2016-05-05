import { getBoard } from './../../../reducers/game';
import { getValidPieces } from './../../../reducers/game';
import { sample } from './../../utils';

export function getValidPiece(game) {
    const board = getBoard(game.get('deck'));
    let validPieces = getValidPieces(board);
    return validPieces.size > 0 ? sample(validPieces) : -1;
}
