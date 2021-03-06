import expect from 'expect';
import { List } from 'immutable';
import { getAvailableDeck } from './getAvailableDeck';
import { CardRecord } from './../ducks/game/records';

describe('src/shared/selectors/availableDeckSelector', () => {
    let deck;
    let TifaOne;
    let TifaTwo;
    let Cloud;
    let Cid;
    describe('given a deck has several instances of the same card type', () => {
        beforeEach(() => {
            TifaOne = new CardRecord({ id: 0, name: 'Tifa', owner: 0, boardIndex: -1 });
            TifaTwo = new CardRecord({ id: 1, name: 'Tifa', owner: 0, boardIndex: -1 });
            Cloud = new CardRecord({ id: 2, name: 'Cloud', owner: 0, boardIndex: -1 });
            Cid = new CardRecord({ id: 3, name: 'Cid', owner: 0, boardIndex: -1 });
            deck = new List([TifaOne, TifaTwo, Cloud, Cid]);
        });

        it('should contain the first instance of each card type', () => {
            expect(getAvailableDeck(deck)).toEqual(new List([TifaOne, Cloud, Cid]));
        });
    });
});