import expect from 'expect';
import { getScoreForOwner } from './../../../src/shared/selectors/scoreSelector';

describe("Blue Score selector", () => {

    describe("given a new game", () => {
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
                {id: 10, owner: 1},

                {id: 11, owner: 2},
                {id: 12, owner: 2},
                {id: 13, owner: 2},
                {id: 14, owner: 2},
                {id: 15, owner: 2}
            ];
        });

        it('should have a default score of 5', () => {
            expect(getScoreForOwner(deck, 1)).toEqual(5)
        });
    });


    describe("given a game in opponent card is flipped", () => {
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
                {id: 10, owner: 1},
                {id: 11, owner: 1},

                {id: 12, owner: 2},
                {id: 13, owner: 2},
                {id: 14, owner: 2},
                {id: 15, owner: 2}
            ];
        });

        it('should have a score of 6 v 4', () => {
            expect(getScoreForOwner(deck, 1)).toEqual(6)
            expect(getScoreForOwner(deck, 2)).toEqual(4)
        });
    });

});