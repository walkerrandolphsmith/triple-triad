import expect from 'expect';
import { getHand } from './../../../src/shared/selectors/handSelector';

describe("Hand selector", () => {

    describe("given player owns no cards", () => {

        let deck;
        beforeEach(() => {
            deck = [
                {id: 0, owner: 0, boardIndex: -1},
                {id: 1, owner: 0, boardIndex: -1},
                {id: 2, owner: 0, boardIndex: -1},
                {id: 3, owner: 0, boardIndex: -1}
            ];
        });

        it('should contain empty hand', () => {
            expect(getHand(deck, 1)).toEqual([])
        });
    });

    describe("given player owns cards all which are on board", () => {

        let deck, cardOne, cardTwo;
        beforeEach(() => {
            cardOne = {id: 0, owner: 1, boardIndex: 1};
            cardTwo = {id: 1, owner: 1, boardIndex: 1};

            deck = [cardOne, cardTwo, {id: 2, owner: 0}, {id: 3, owner: 0}];
        });

        it('should contain an empty hand', () => {
            expect(getHand(deck, 1)).toEqual([])
        });
    });


    describe("given player owns two cards none on board", () => {

        let deck, cardOne, cardTwo;
        beforeEach(() => {
            cardOne = {id: 0, owner: 1, boardIndex: -1};
            cardTwo = {id: 1, owner: 1, boardIndex: -1};

            deck = [cardOne, cardTwo, {id: 2, owner: 0}, {id: 3, owner: 0}];
        });

        it('should contain an empty hand', () => {
            expect(getHand(deck, 1)).toEqual([cardOne, cardTwo])
        });
    });

    describe("given player owns two cards one on board", () => {

        let deck, cardOne, cardTwo;
        beforeEach(() => {
            cardOne = {id: 0, owner: 1, boardIndex: 1};
            cardTwo = {id: 1, owner: 1, boardIndex: -1};

            deck = [cardOne, cardTwo, {id: 2, owner: 0}, {id: 3, owner: 0}];
        });

        it('should contain the card not on the board in hand', () => {
            expect(getHand(deck, 1)).toEqual([cardTwo])
        });
    });
});