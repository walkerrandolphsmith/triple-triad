import expect from 'expect';
import { List } from 'immutable';
import { getCardToSelect } from './getCardToSelect';
import { CardRecord } from './../constants/records';

describe('src/shared/actions/utils/getCardToSelect', () => {
    it('should be a function', () => {
        expect(getCardToSelect).toBeA('function');
    });

    let actual;
    describe('Given a set of cards to select from and a direction in the loop', () => {
        let selectedCard;
        let cards;
        let directionInLoop;
        beforeEach(() => {
            selectedCard = 2;
            cards = new List([
                new CardRecord({ id: 0, name: '1', owner: 1, boardIndex: -1 }),
                new CardRecord({ id: 1, name: '2', owner: 1, boardIndex: -1 }),
                new CardRecord({ id: selectedCard, name: '3', owner: 1, boardIndex: -1 }),
                new CardRecord({ id: 3, name: '4', owner: 1, boardIndex: -1 }),
                new CardRecord({ id: 4, name: '5', owner: 1, boardIndex: -1 })
            ]);
            directionInLoop = null;
        });

        describe('When there is not a previously selected card', ()=> {
           beforeEach(() => {
               actual = getCardToSelect(-1, cards, 'down');
           });

           it('should return the first card in the list of cards', () =>  {
              expect(actual.toJS()).toEqual(cards.first().toJS());
           });
        });

        describe('When the direction in the loop id down', ()=> {
            beforeEach(() => {
                actual = getCardToSelect(selectedCard, cards, 'down');
            });

            it('should return the first card in the list of cards', () =>  {
                expect(actual.toJS()).toEqual(cards.get(3).toJS());
            });
        });

        describe('When the direction in the loop id up', ()=> {
            beforeEach(() => {
                actual = getCardToSelect(selectedCard, cards, 'up');
            });

            it('should return the first card in the list of cards', () =>  {
                expect(actual.toJS()).toEqual(cards.get(1).toJS());
            });
        });
    });
});