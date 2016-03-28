import expect from 'expect';
import { Map, List } from 'immutable';
import { getRandomHand, __RewireAPI__ } from './getRandomHand';

describe('getRandomHand utility', () => {
    let game;
    let deck;
    beforeEach(() => {
        deck = new List([
            new Map({ id: 1, name: '1', owner: 0 }),
            new Map({ id: 2, name: '2', owner: 0 }),
            new Map({ id: 3, name: '3', owner: 0 }),
            new Map({ id: 4, name: '4', owner: 0 }),
            new Map({ id: 5, name: '5', owner: 0 }),
            new Map({ id: 6, name: '6', owner: 0 }),
            new Map({ id: 5, name: '6', owner: 0 }),
            new Map({ id: 7, name: '7', owner: 1 })
        ]);

        game = new Map({
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
            expect(card.get('owner')).toEqual(0);
        });
    });

    it('should not contain two cards with the same name', () => {
        let names = {};
        getRandomHand(game).forEach(card => {
            expect(typeof names[card.get('name')] === 'undefined').toEqual(true);
        });
    });
});