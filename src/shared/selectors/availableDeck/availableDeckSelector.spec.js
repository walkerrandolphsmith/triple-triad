import expect from 'expect';
import { Map, List } from 'immutable';
import { getAvailableDeck } from './availableDeckSelector';

describe("Available Deck selector", () => {

    describe("given a deck has several instances of the same card type", () => {

        let deck, TifaOne, TifaTwo, Cloud, Cid;
        beforeEach(() => {

            TifaOne = new Map({id: 0, name: 'Tifa', owner: 0, boardIndex: -1});
            TifaTwo = new Map({id: 1, name: 'Tifa', owner: 0, boardIndex: -1});
            Cloud = new Map({id: 2, name: 'Cloud', owner: 0, boardIndex: -1});
            Cid = new Map({id: 3, name: 'Cid', owner: 0, boardIndex: -1});

            deck = new List([TifaOne, TifaTwo, Cloud, Cid]);
        });

        it('should contain the first instance of each card type', () => {
            expect(getAvailableDeck(deck)).toEqual(new List([TifaOne, Cloud, Cid]))
        });
    });
});