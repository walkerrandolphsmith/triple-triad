import expect from 'expect';
import { getIsFullHand } from './../../../src/shared/selectors/isFullHandSelector';

describe("stepComplete selector", () => {

    let deck;
    beforeEach(() => {
        deck = [
            {id: 1, owner: 0},
            {id: 2, owner: 0},
            {id: 3, owner: 0},
            {id: 4, owner: 0},
            {id: 5, owner: 0}
        ];
    });

    describe("stepComplete selector of a full hand", () => {
        it('should be true', () => {
            expect(getIsFullHand([deck[0], deck[1], deck[2], deck[3], deck[4]])).toEqual(true)
        });
    });

    describe("stepComplete selector of a empty hand", () => {
        it('should be false', () => {
            expect(getIsFullHand([])).toEqual(false)
        });
    });

    describe("stepComplete selector of a partially selected hand", () => {
        it('should be false', () => {
            expect(getIsFullHand([deck[0], deck[1], deck[2]])).toEqual(false)
        });
    });

});