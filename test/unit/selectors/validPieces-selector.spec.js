import expect from 'expect';
import { validPiecesSelectorCreator } from './../../../src/shared/selectors/';
import deck from './../../../src/shared/constants/deck';
import _ from 'lodash';

describe("validPieces selector", () => {

    describe("validPieces selector of a full board", () => {
        it('should have no valid pieces', () => {
            expect(validPiecesSelectorCreator({
                board: [deck[0], deck[1], deck[2], deck[3], deck[4], deck[0], deck[1], deck[2], deck[3]]
            })).toEqual([])
        });
    });

    describe("validPieces selector of an empty board", () => {
        it('should have nine valid pieces', () => {
            expect(validPiecesSelectorCreator({
                board: [null, null, null, null, null, null, null, null, null]
            })).toEqual([0,1,2,3,4,5,6,7,8])
        });
    });

    describe("validPieces selector of partially placed board", () => {
        it('should have four valid pieces', () => {
            expect(validPiecesSelectorCreator({
                board: [deck[0], deck[1], null, deck[3], deck[4], deck[5], null, null, null]
            })).toEqual([2, 6, 7, 8])
        });
    });

});