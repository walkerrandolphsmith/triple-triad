import { getBoard } from './../../selectors/boardSelector';
import { getValidPieces } from './../../selectors/validPiecesSelector';

export function getPieceToSelect(game, keyCode){

    const board = getBoard(game.get('deck').toJS());

    let validPieces = getValidPieces(board);

    const selectedPiece = game.get('selectedPiece');

    let nextEmptyPiece = selectedPiece === -1 ? validPieces[0] : selectedPiece;

    switch(keyCode){
        case 'left': nextEmptyPiece = getNextEmptyPieceHorizontally(nextEmptyPiece, validPieces, -1); break;
        case 'right': nextEmptyPiece = getNextEmptyPieceHorizontally(nextEmptyPiece, validPieces, 1); break;
        case 'enter': break;
    }

    return nextEmptyPiece;
}

function getNextEmptyPieceHorizontally(emptyPieceIndex, validPieces, direction) {
    return validPieces[
        (validPieces.findIndex(emptyPiece => emptyPiece === emptyPieceIndex) + direction) % validPieces.length
        ];
}

