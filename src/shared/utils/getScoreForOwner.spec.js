import expect from 'expect';
import { List } from 'immutable';
import { getScoreForOwner } from './getScoreForOwner';
import { CardRecord } from './../constants/records';

describe('src/shared/selectors/scoreSelector', () => {
    describe('given a new game', () => {
        let deck;
        beforeEach(() => {
            deck = new List([
                new CardRecord({ id: 1, owner: 0 }),
                new CardRecord({ id: 2, owner: 0 }),
                new CardRecord({ id: 3, owner: 0 }),
                new CardRecord({ id: 4, owner: 0 }),
                new CardRecord({ id: 5, owner: 0 }),

                new CardRecord({ id: 6, owner: 1 }),
                new CardRecord({ id: 7, owner: 1 }),
                new CardRecord({ id: 8, owner: 1 }),
                new CardRecord({ id: 9, owner: 1 }),
                new CardRecord({ id: 10, owner: 1 }),

                new CardRecord({ id: 11, owner: 2 }),
                new CardRecord({ id: 12, owner: 2 }),
                new CardRecord({ id: 13, owner: 2 }),
                new CardRecord({ id: 14, owner: 2 }),
                new CardRecord({ id: 15, owner: 2 })
            ]);
        });

        it('should have a default score of 5', () => {
            expect(getScoreForOwner(deck, 1)).toEqual(5);
        });
    });

    describe('given a game in opponent card is flipped', () => {
        let deck;
        beforeEach(() => {
            deck = new List([
                new CardRecord({ id: 1, owner: 0 }),
                new CardRecord({ id: 2, owner: 0 }),
                new CardRecord({ id: 3, owner: 0 }),
                new CardRecord({ id: 4, owner: 0 }),
                new CardRecord({ id: 5, owner: 0 }),

                new CardRecord({ id: 6, owner: 1 }),
                new CardRecord({ id: 7, owner: 1 }),
                new CardRecord({ id: 8, owner: 1 }),
                new CardRecord({ id: 9, owner: 1 }),
                new CardRecord({ id: 10, owner: 1 }),
                new CardRecord({ id: 11, owner: 1 }),

                new CardRecord({ id: 12, owner: 2 }),
                new CardRecord({ id: 13, owner: 2 }),
                new CardRecord({ id: 14, owner: 2 }),
                new CardRecord({ id: 15, owner: 2 })
            ]);
        });

        it('should have a score of 6 v 4', () => {
            expect(getScoreForOwner(deck, 1)).toEqual(6);
            expect(getScoreForOwner(deck, 2)).toEqual(4);
        });
    });
});