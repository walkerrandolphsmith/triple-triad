import expect from 'expect';
import { List } from 'immutable';
import { getValidPieces } from './getValidPieces';
import { CardRecord } from './../ducks/game/records';

describe('src/shared/selectors/validPiecesSelector', () => {
    let deck;
    beforeEach(() => {
        deck = new List([
            new CardRecord({ id: 1, owner: 1, boardIndex: 0 }),
            new CardRecord({ id: 2, owner: 1, boardIndex: 1 }),
            new CardRecord({ id: 3, owner: 1, boardIndex: 2 }),
            new CardRecord({ id: 4, owner: 1, boardIndex: 3 }),
            new CardRecord({ id: 5, owner: 1, boardIndex: 4 }),
            new CardRecord({ id: 6, owner: 1, boardIndex: 5 }),
            new CardRecord({ id: 7, owner: 1, boardIndex: 6 }),
            new CardRecord({ id: 8, owner: 1, boardIndex: 7 }),
            new CardRecord({ id: 9, owner: 1, boardIndex: 8 }),

            new CardRecord({ id: 10, owner: 0, boardIndex: -1 }),
            new CardRecord({ id: 11, owner: 0, boardIndex: -1 }),
            new CardRecord({ id: 12, owner: 0, boardIndex: -1 }),
            new CardRecord({ id: 13, owner: 0, boardIndex: -1 })
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