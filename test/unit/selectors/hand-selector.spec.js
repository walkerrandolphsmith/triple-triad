import expect from 'expect';
import { getHand } from './../../../src/shared/selectors/handSelector';
import deck from './../../../src/shared/constants/deck';

describe("Hand selector", () => {

    let owner, board, expectedHand;
    beforeEach(() => {
        deck.forEach(card => {
            card.owner = 0;
        });
        expectedHand = [deck[0]];
    });

    describe("given player owns one card not on board", () => {

        beforeEach(() => {
            owner = 1;
            expectedHand.forEach(card => {
                card.owner = owner;
            });
            board = [];

        });

        it('should contain one cards', () => {
            expect(getHand(deck, board, owner)).toEqual(expectedHand)
        });
    });

    describe("given player owns five cards, four in hand and one on board", () => {

        beforeEach(() => {
            owner = 2;
            expectedHand.forEach(card => {
                card.owner = owner;
            });
            deck[1].owner = owner;
            board = [deck[1]];
        });

        it('should contain four cards', () => {
            expect(getHand(deck, board, owner)).toEqual(expectedHand)
        });
    });
});