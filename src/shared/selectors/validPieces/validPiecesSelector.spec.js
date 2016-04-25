import expect from 'expect';
import { Map, List } from 'immutable';
import { getValidPieces } from './validPiecesSelector';

describe('src/shared/selectors/validPiecesSelector', () => {
    let deck;
    beforeEach(() => {
        deck = new List([
            new Map({ id: 1, owner: 1, boardIndex: 0 }),
            new Map({ id: 2, owner: 1, boardIndex: 1 }),
            new Map({ id: 3, owner: 1, boardIndex: 2 }),
            new Map({ id: 4, owner: 1, boardIndex: 3 }),
            new Map({ id: 5, owner: 1, boardIndex: 4 }),
            new Map({ id: 6, owner: 1, boardIndex: 5 }),
            new Map({ id: 7, owner: 1, boardIndex: 6 }),
            new Map({ id: 8, owner: 1, boardIndex: 7 }),
            new Map({ id: 9, owner: 1, boardIndex: 8 }),

            new Map({ id: 10, owner: 0, boardIndex: -1 }),
            new Map({ id: 11, owner: 0, boardIndex: -1 }),
            new Map({ id: 12, owner: 0, boardIndex: -1 }),
            new Map({ id: 13, owner: 0, boardIndex: -1 })
        ]);
    });

    describe('validPieces selector of a full board', () => {
        it('should have no valid pieces', () => {
            let expected = getValidPieces([
                deck.get(0), deck.get(1), deck.get(2), deck.get(3), deck.get(4), deck.get(5), deck.get(6), deck.get(7), deck.get(8)
            ]).toJS();
            let actual = new List([]).toJS();
            expect(expected).toEqual(actual);
        });
    });

    describe('validPieces selector of an empty board', () => {
        it('should have nine valid pieces', () => {
            let expected = getValidPieces(new List([])).toJS();
            let actual = new List([0, 1, 2, 3, 4, 5, 6, 7, 8]).toJS();
            expect(expected).toEqual(actual);
        });
    });

    describe('validPieces selector of partially placed board', () => {
        it('should have four valid pieces', () => {
            let expected = getValidPieces([
                deck.get(0), deck.get(1), deck.get(3), deck.get(4), deck.get(5)
            ]).toJS();
            let actual = new List([2, 6, 7, 8]).toJS();
            expect(expected).toEqual(actual);
        });
    });
});