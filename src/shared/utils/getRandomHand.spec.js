import expect from 'expect';
import { List } from 'immutable';
import { getRandomHand, __RewireAPI__ } from './getRandomHand';
import { GameRecord, CardRecord } from './../constants/records';

describe('src/shared/actions/utils/getRandomHand', () => {
    let game;
    let deck;
    beforeEach(() => {
        deck = new List([
            new CardRecord({ id: 1, name: '1', owner: 0 }),
            new CardRecord({ id: 2, name: '2', owner: 0 }),
            new CardRecord({ id: 3, name: '3', owner: 0 }),
            new CardRecord({ id: 4, name: '4', owner: 0 }),
            new CardRecord({ id: 5, name: '5', owner: 0 }),
            new CardRecord({ id: 6, name: '6', owner: 0 }),
            new CardRecord({ id: 5, name: '6', owner: 0 }),
            new CardRecord({ id: 7, name: '7', owner: 1 })
        ]);

        game = new GameRecord({
            deck: deck
        });

        __RewireAPI__.__Rewire__('getAvailableDeck', () => {
            return new List([
                deck.get(0), deck.get(1), deck.get(2), deck.get(3), deck.get(4), deck.get(5)
            ]);
        });
    });

    it('should be a function', () => {
        expect(getRandomHand).toBeA('function');
    });

    it('should retrieve five cards', () => {
        expect(getRandomHand(game).size).toEqual(5);
    });

    it('should not contain any cards with an owner', () => {
        getRandomHand(game).forEach(card => {
            expect(card.owner).toEqual(0);
        });
    });

    it('should not contain two cards with the same name', () => {
        let names = {};
        getRandomHand(game).forEach(card => {
            expect(typeof names[card.name] === 'undefined').toEqual(true);
        });
    });
});