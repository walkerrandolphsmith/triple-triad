import expect from 'expect';
import { Map, List } from 'immutable';
import { getIsFullHand } from './getIsFullHand';
import { CardRecord } from './../constants/records';

describe('src/shared/selectors/ifFullHandSelector', () => {
    let deck;
    beforeEach(() => {
        deck = new List([
            new CardRecord({ id: 1, owner: 0 }),
            new CardRecord({ id: 2, owner: 0 }),
            new CardRecord({ id: 3, owner: 0 }),
            new CardRecord({ id: 4, owner: 0 }),
            new CardRecord({ id: 5, owner: 0 })
        ]);
    });

    describe('stepComplete selector of a full hand', () => {
        it('should be true', () => {
            const actual = getIsFullHand(new List([deck[0], deck[1], deck[2], deck[3], deck[4]]));
            const expected = true;
            expect(actual).toEqual(expected);
        });
    });

    describe('stepComplete selector of a empty hand', () => {
        it('should be false', () => {
            const actual = getIsFullHand(new List([]));
            const expected = false;
            expect(actual).toEqual(expected);
        });
    });

    describe('stepComplete selector of a partially selected hand', () => {
        it('should be false', () => {
            const actual = getIsFullHand(new List([deck[0], deck[1], deck[2]]));
            const expected = false;
            expect(actual).toEqual(expected);
        });
    });
});