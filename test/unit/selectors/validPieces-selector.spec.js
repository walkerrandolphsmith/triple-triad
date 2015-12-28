import expect from 'expect';
import { validPiecesSelector } from './../../../src/shared/selectors/scoreSelector';
import deck from './../../../src/shared/constants/deck';

describe("validPieces selector", () => {

    describe("validPieces selector of a full board", () => {
        it('should have no valid pieces', () => {
            expect(validPiecesSelector([deck[0], deck[1], deck[2], deck[3], deck[4], deck[0], deck[1], deck[2], deck[3]])).toEqual([])
        });
    });

    describe("validPieces selector of an empty board", () => {
        it('should have nine valid pieces', () => {
            expect(validPiecesSelector([null, null, null, null, null, null, null, null, null])).toEqual([0,1,2,3,4,5,6,7,8])
        });
    });

    describe("validPieces selector of partially placed board", () => {
        it('should have four valid pieces', () => {
            expect(validPiecesSelector([deck[0], deck[1], null, deck[3], deck[4], deck[5], null, null, null])).toEqual([2, 6, 7, 8])
        });
    });

});