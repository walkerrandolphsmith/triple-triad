import expect from 'expect';
import { Map, List } from 'immutable';
import { selectCardForOpponent, __RewireAPI__ } from './selectCardForOpponent';

describe('selectCardForOpponent utility', () => {
    let game;
    let deck;
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

    __RewireAPI__.__Rewire__('getHand', () => {
        return new List([
            deck.get(0), deck.get(1), deck.get(2), deck.get(3), deck.get(4), deck.get(5)
        ]);
    });

    __RewireAPI__.__Rewire__('sample', () => deck.get(0));

    it('should be a function', () => {
        expect(selectCardForOpponent).toBeA('function');
    });

    it('should return the id of the card sample returns', () => {
        expect(selectCardForOpponent(game)).toEqual(1);
    });
});