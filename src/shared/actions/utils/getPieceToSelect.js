import { getBoard } from './../../selectors/boardSelector';

export function getPieceToSelect(game, keyCode){

    const board = getBoard(game.get('deck').toJS());
    const selectedPiece = game.get('selectedPiece');

    let firstValidPiece = board.findIndex(piece => piece === null);
    debugger;
    let nextEmptyPiece = selectedPiece === -1 ? firstValidPiece : selectedPiece;

    switch(keyCode){
        case 'left': nextEmptyPiece = getNextEmptyPieceHorizontally(nextEmptyPiece, board, 8); break;
        case 'right': nextEmptyPiece = getNextEmptyPieceHorizontally(nextEmptyPiece, board, 1); break;
        case 'enter': break;
    }

    return nextEmptyPiece;
}

function getNextEmptyPieceHorizontally(emptyPieceIndex, board, direction) {
    let l = board.length;
    let nextEmptyIndex = emptyPieceIndex;
    let searching = true;

    while(searching){
        nextEmptyIndex = (nextEmptyIndex + direction) % l;
        if(board[nextEmptyIndex] === null)
            searching = false;
    }

    return nextEmptyIndex;
}

