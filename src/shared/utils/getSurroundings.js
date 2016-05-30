import { getBoard } from './getBoard';

export const getSurroundings = (i, deck) => {
    const board = getBoard(deck);

    const row = i / 3;
    const column = i % 3;

    const card = board.filter(c => c && c.boardIndex === i).get(0);

    const above = i - 3;
    const below = i + 3;
    const left = i - 1;
    const right = i + 1;

    const isNotFirstRow = row > 0;
    const isNotLastRow = row < 2;
    const isNotFirstColumn = column > 0;
    const isNotLastColumn = column < 2;

    const cardAbove = isNotFirstRow ? board.filter(ca => ca.boardIndex === above).get(0) : null;
    const cardBelow = isNotLastRow ? board.filter(cb => cb.boardIndex === below).get(0) : null;
    const cardAtLeft = isNotFirstColumn ? board.filter(cl => cl.boardIndex === left).get(0) : null;
    const cardAtRight = isNotLastColumn ? board.filter(cr => cr.boardIndex === right).get(0) : null;

    return {
        card: card,
        above: {
            index: above,
            card: cardAbove
        },
        below: {
            index: below,
            card: cardBelow
        },
        left: {
            index: left,
            card: cardAtLeft
        },
        right: {
            index: right,
            card: cardAtRight
        }
    }
};