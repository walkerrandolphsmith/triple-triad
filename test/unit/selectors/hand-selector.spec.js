import expect from 'expect';
import { getHand } from './../../../src/shared/selectors/handSelector';
import deck from './../../../src/shared/constants/deck';

describe("Hand selector", () => {

    let hand;
    let owner;
    beforeEach(() => {
        deck.forEach(card => {
            card.owner = 0;
        });
        hand = [deck[0]];
    });

    describe("given five cards are selected by player", () => {

        beforeEach(() => {
            owner = 1;
            hand.forEach(card => {
                card.owner = owner;
            });

        });

        it('should contain five cards', () => {
            expect(getHand(deck, owner)).toEqual(hand)
        });
    });

    describe("given five cards are selected by player", () => {

        beforeEach(() => {
            owner = 2;
            hand.forEach(card => {
                card.owner = owner;
            });
        });

        it('should contain five cards', () => {
            expect(getHand(deck, owner)).toEqual(hand)
        });
    });
});