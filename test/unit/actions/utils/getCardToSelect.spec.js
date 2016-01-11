import expect from 'expect';
import { Map, List } from 'immutable';
import { getCardToSelect } from './../../../../src/shared/actions/utils';

describe('getCardToSelect utility', () => {

    let deck;
    beforeEach(() => {
        deck = [
            {id: 0, name: '1', owner: 1, boardIndex: -1},
            {id: 1, name: '2', owner: 1, boardIndex: -1},
            {id: 2, name: '3', owner: 1, boardIndex: -1},
            {id: 3, name: '4', owner: 1, boardIndex: -1},
            {id: 4, name: '5', owner: 1, boardIndex: -1}
        ]
    });

    it('should be a function', () => {
        expect(getCardToSelect).toBeA('function');
    });

    describe('Given no card has been selected', () => {

        let game;
        beforeEach(() => {
           game = new Map({
               deck: new List(deck),
               selectedCard: -1
           });
        });

        it('should return the first card in the hand', () => {
            expect(getCardToSelect(game)).toEqual(deck[0]);
        });

    });

    describe('Given a card has previously been selected and the direction in loop is 1', () => {

        let game, selectedCard;
        beforeEach(() => {
            selectedCard = deck[0].id;
            game = new Map({
                deck: new List(deck),
                selectedCard: selectedCard
            });
        });

        it('should return the next card in the hand', () => {
            expect(getCardToSelect(game, 'down')).toEqual(deck[1]);
        });

    });

    describe('Given a card has previously been selected and the direction in loop is 4', () => {

        let game, selectedCard;
        beforeEach(() => {
            selectedCard = deck[1].id;
            game = new Map({
                deck: new List(deck),
                selectedCard: selectedCard
            });
        });

        it('should return the previous card in the hand', () => {
            expect(getCardToSelect(game, 'up')).toEqual(deck[0]);
        });

    });

    describe('Given previously selected card is the first one in the hand and the direction in loop is 4', () => {

        let game, selectedCard;
        beforeEach(() => {
            selectedCard = deck[0].id;
            game = new Map({
                deck: new List(deck),
                selectedCard: selectedCard
            });
        });

        it('should return the last card in the hand', () => {
            expect(getCardToSelect(game, 'up')).toEqual(deck[4]);
        });

    });

    describe('Given previously selected card is the last one in the hand and the direction in loop is 1', () => {

        let game, selectedCard;
        beforeEach(() => {
            selectedCard = deck[4].id;
            game = new Map({
                deck: new List(deck),
                selectedCard: selectedCard
            });
        });

        it('should return the last card in the hand', () => {
            expect(getCardToSelect(game, 'down')).toEqual(deck[0]);
        });

    });

});