import expect from 'expect';
import { Map, List } from 'immutable';
import { getRandomHand } from './../../../../src/shared/actions/utils';

describe('getCardsToAdd utility', () => {

    let game;
    beforeEach(() => {
        game = new Map({
            deck: new List([
                {id: 1, name: "1", owner: 0},
                {id: 2, name: "2", owner: 0},
                {id: 3, name: "3", owner: 0},
                {id: 4, name: "4", owner: 0},
                {id: 5, name: "5", owner: 1},
                {id: 6, name: "5", owner: 0},
                {id: 7, name: "7", owner: 0}
            ])
        })
    });

    it('should be a function', () => {
        expect(getRandomHand).toBeA('function');
    });


    it('should retreive five cards', () => {
       expect(getRandomHand(game).length).toEqual(5);
    });

    it('should not contain any cards with an owner', () => {
        getRandomHand(game).forEach(card => {
            expect(card.owner).toEqual(0);
        });
    });

    it('should not contain two cards with the same name', () => {
        let names = {};
        getRandomHand(game).forEach(card => {
            expect(names[card.name] === undefined).toEqual(true);
            names[card.name] === true;
        });
    });

});