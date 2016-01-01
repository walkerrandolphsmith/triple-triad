import expect from 'expect';
import { getCardSelected } from './../../../src/shared/selectors/cardSelectedSelector';

describe("cardSelected selector", () => {

    describe("cardSelector given no card has been selected from a hand", () => {
        let deck;
        beforeEach(() => {
            deck = [{id: 0, isSelected: false}]
        });

        it('should indicate no card has been selected', () => {
            expect(getCardSelected(deck)).toEqual(false)
        });
    });

    describe("cardSelector given a card has been selected from a hand", () => {
        let deck;
        beforeEach(() => {
            deck = [{id: 0, isSelected: true}]
        });

        it('should indicate no card has been selected', () => {
            expect(getCardSelected(deck)).toEqual(true)
        });
    });

});