import { getBoard } from './../../selectors/boardSelector';
import { getValidPieces } from './../../selectors/validPiecesSelector';

export function getPieceToSelect(game, keyCode){

    const board = getBoard(game.get('deck').toJS());

    let validPieces = getValidPieces(board);

    const selectedPiece = game.get('selectedPiece');

    let nextEmptyPiece = selectedPiece === -1 ? validPieces[0] : selectedPiece;

    switch(keyCode){
        case 'left': nextEmptyPiece = getNextEmptyPieceHorizontally(nextEmptyPiece, validPieces, validPieces.length - 1); break;
        case 'right': nextEmptyPiece = getNextEmptyPieceHorizontally(nextEmptyPiece, validPieces, 1); break;
        case 'up': nextEmptyPiece = getNextEmptyPieceVertically(nextEmptyPiece, validPieces, 6); break;
        case 'down': nextEmptyPiece = getNextEmptyPieceVertically(nextEmptyPiece, validPieces, 3); break;
        case 'enter': break;
    }

    return nextEmptyPiece;
}

function getNextEmptyPieceHorizontally(emptyPieceIndex, validPieces, direction) {
    return validPieces[
        (validPieces.findIndex(emptyPiece => emptyPiece === emptyPieceIndex) + direction) % validPieces.length
        ];
}

function getNextEmptyPieceVertically(currentIndex, validPieces, direction) {


    let board = getBoardWithAllTiles(validPieces);

    let nextIndex = (currentIndex + direction) % board.length;

    if(board[nextIndex] === null) {
        nextIndex = (nextIndex + direction) % board.length;
        if (board[nextIndex] === null){
            return currentIndex;
        }else{
            return board[nextIndex];
        }
    }
    else
        return board[nextIndex];
}

function getBoardWithAllTiles(validPieces) {
    return [0,1,2,3,4,5,6,7,8].reduce((board, idx) => {
        let piece = validPieces.find(index => index === idx) > -1 ? idx : null;
        board.push(piece);
        return board;
    }, []);
}
