import { List } from 'immutable';
import { getBoard } from './../../selectors/boardSelector';
import { getValidPieces } from './../../selectors/validPiecesSelector';

export function getPieceToSelect(game, keyCode){

    const board = getBoard(game.get('deck'));

    let validPieces = getValidPieces(board);

    const selectedPiece = game.get('selectedPiece');

    let nextEmptyPiece = selectedPiece === -1 ? validPieces.get(0) : selectedPiece;

    switch(keyCode){
        case 'left': nextEmptyPiece = getNextEmptyPieceHorizontally(nextEmptyPiece, validPieces, validPieces.size - 1); break;
        case 'right': nextEmptyPiece = getNextEmptyPieceHorizontally(nextEmptyPiece, validPieces, 1); break;
        case 'up': nextEmptyPiece = getNextEmptyPieceVertically(nextEmptyPiece, validPieces, 6); break;
        case 'down': nextEmptyPiece = getNextEmptyPieceVertically(nextEmptyPiece, validPieces, 3); break;
        case 'enter': break;
    }
    debugger;
    return nextEmptyPiece;
}

function getNextEmptyPieceHorizontally(emptyPieceIndex, validPieces, direction) {
    return validPieces.get(
        (validPieces.findIndex(emptyPiece => emptyPiece === emptyPieceIndex) + direction) % validPieces.size
    );
}

function getNextEmptyPieceVertically(currentIndex, validPieces, direction) {


    let board = getBoardWithAllTiles(validPieces);

    let nextIndex = (currentIndex + direction) % board.size;

    if(board.get(nextIndex) === null) {
        nextIndex = (nextIndex + direction) % board.size;
        if (board.get(nextIndex) === null){
            return currentIndex;
        }else{
            return board.get(nextIndex);
        }
    }
    else
        return board.get(nextIndex);
}

function getBoardWithAllTiles(validPieces) {
    return [0,1,2,3,4,5,6,7,8].reduce((board, idx, i) => {
        let piece = validPieces.find(index => index === idx) > -1 ? idx : null;
        return board.set(i, piece);
    }, new List([]));
}
