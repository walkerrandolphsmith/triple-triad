import expect from 'expect';
import { Map, List } from 'immutable';
import GetCardToAdd from './../../../../src/shared/actions/utils/getCardToAdd';
import { getCardToAdd, __RewireAPI__ as getCardToAddRewireAPI } from './../../../../src/shared/actions/utils/getCardToAdd';

describe('getCardToAdd utility', () => {

    let deck;
    beforeEach(() => {
        deck = new List([
            new Map({id: 0, name: '1', owner: 1, boardIndex: -1}),
            new Map({id: 1, name: '2', owner: 1, boardIndex: -1}),
            new Map({id: 2, name: '3', owner: 1, boardIndex: -1}),
            new Map({id: 3, name: '4', owner: 1, boardIndex: -1}),
            new Map({id: 4, name: '5', owner: 1, boardIndex: -1})
        ]);

        GetCardToAdd.__Rewire__('getAvailableDeck', function(){
            return new List([
                deck.get(0), deck.get(1), deck.get(2), deck.get(3), deck.get(4)
            ]);
        });
    });

    it('should be a function', () => {
        expect(getCardToAdd).toBeA('function');
    });

    describe('Given no card has been selected', () => {

        let game;
        beforeEach(() => {
           game = new Map({
               deck: deck,
               selectedCard: -1
           });
        });

        it('should return the first card in the hand', () => {
            expect(getCardToAdd(game)).toEqual(deck.get(0));
        });

    });

    describe('Given a card has previously been selected and the direction in loop is 1', () => {

        let game, selectedCard;
        beforeEach(() => {
            selectedCard = deck.get(0).get('id');
            game = new Map({
                deck: deck,
                selectedCard: selectedCard
            });
        });

        it('should return the next card in the hand', () => {
            expect(getCardToAdd(game, 'right')).toEqual(deck.get(1));
        });

    });

    describe('Given a card has previously been selected and the direction in loop is 4', () => {

        let game, selectedCard;
        beforeEach(() => {
            selectedCard = deck.get(1).get('id');
            game = new Map({
                deck: deck,
                selectedCard: selectedCard
            });
        });

        it('should return the previous card in the hand', () => {
            expect(getCardToAdd(game, 'left')).toEqual(deck.get(0));
        });

    });

    describe('Given previously selected card is the first one in the hand and the direction in loop is 4', () => {

        let game, selectedCard;
        beforeEach(() => {
            selectedCard = deck.get(0).get('id'),
            game = new Map({
                deck: deck,
                selectedCard: selectedCard
            });
        });

        it('should return the last card in the hand', () => {
            expect(getCardToAdd(game, 'left')).toEqual(deck.get(4));
        });

    });

    describe('Given previously selected card is the last one in the hand and the direction in loop is 1', () => {

        let game, selectedCard;
        beforeEach(() => {
            selectedCard = deck.get(4).get('id'),
            game = new Map({
                deck: new List(deck),
                selectedCard: selectedCard
            });
        });

        it('should return the last card in the hand', () => {
            expect(getCardToAdd(game, 'right')).toEqual(deck.get(0))
        });

    });

});