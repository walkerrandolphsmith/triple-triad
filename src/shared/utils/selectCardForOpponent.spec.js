import expect from 'expect';
import { List } from 'immutable';
import { selectCardForOpponent, __RewireAPI__ } from './selectCardForOpponent';
import { GameRecord, CardRecord } from './../ducks/game/records';

describe('src/shared/actions/utils/selectCardForOpponent', () => {
    let game;
    let deck;
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