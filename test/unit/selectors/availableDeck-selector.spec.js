import expect from 'expect';
import { getAvailableDeck } from './../../../src/shared/selectors/availableDeckSelector';

describe("Available Deck selector", () => {

    describe("given a deck has several instances of the same card type", () => {

        let deck, TifaOne, TifaTwo, Cloud, Cid;
        beforeEach(() => {

            TifaOne = {id: 0, name: 'Tifa', owner: 0, boardIndex: -1};
            TifaTwo = {id: 1, name: 'Tifa', owner: 0, boardIndex: -1};
            Cloud = {id: 2, name: 'Cloud', owner: 0, boardIndex: -1};
            Cid = {id: 3, name: 'Cid', owner: 0, boardIndex: -1};

            deck = [TifaOne, TifaTwo, Cloud, Cid];
        });

        it('should contain the first instance of each card type', () => {
            expect(getAvailableDeck(deck)).toEqual([TifaOne, Cloud, Cid])
        });
    });
});