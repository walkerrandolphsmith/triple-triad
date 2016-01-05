import expect from 'expect';
import { getValidPieces } from './../../../src/shared/selectors/validPiecesSelector';

describe("validPieces selector", () => {

    let deck;
    beforeEach(() => {
        deck = [
            {id: 1, owner: 0},
            {id: 2, owner: 0},
            {id: 3, owner: 0},
            {id: 4, owner: 0},
            {id: 5, owner: 0},

            {id: 6, owner: 1},
            {id: 7, owner: 1},
            {id: 8, owner: 1},
            {id: 9, owner: 1},
            {id: 10, owner: 1}
        ];
    });

    describe("validPieces selector of a full board", () => {
        it('should have no valid pieces', () => {
            expect(getValidPieces([deck[0], deck[1], deck[2], deck[3], deck[4], deck[0], deck[1], deck[2], deck[3]])).toEqual([])
        });
    });

    describe("validPieces selector of an empty board", () => {
        it('should have nine valid pieces', () => {
            expect(getValidPieces([null, null, null, null, null, null, null, null, null])).toEqual([0,1,2,3,4,5,6,7,8])
        });
    });

    describe("validPieces selector of partially placed board", () => {
        it('should have four valid pieces', () => {
            expect(getValidPieces([deck[0], deck[1], null, deck[3], deck[4], deck[5], null, null, null])).toEqual([2, 6, 7, 8])
        });
    });

});