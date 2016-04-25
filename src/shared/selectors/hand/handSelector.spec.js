import expect from 'expect';
import { Map, List } from 'immutable';
import { getHand } from './handSelector';

describe('src/shared/selectors/handSelector', () => {
    let deck;
    let cardOne;
    let cardTwo;
    describe('given player owns no cards', () => {
        beforeEach(() => {
            deck = new List([
                new Map({ id: 0, owner: 0, boardIndex: -1 }),
                new Map({ id: 1, owner: 0, boardIndex: -1 }),
                new Map({ id: 2, owner: 0, boardIndex: -1 }),
                new Map({ id: 3, owner: 0, boardIndex: -1 })
            ]);
        });

        it('should contain empty hand', () => {
            expect(getHand(deck, 1)).toEqual(new List([]));
        });
    });

    describe('given player owns cards all which are on board', () => {
        beforeEach(() => {
            cardOne = new Map({ id: 0, owner: 1, boardIndex: 1 });
            cardTwo = new Map({ id: 1, owner: 1, boardIndex: 1 });
            deck = new List([cardOne, cardTwo, new Map({ id: 2, owner: 0 }), new Map({ id: 3, owner: 0 })]);
        });

        it('should contain an empty hand', () => {
            expect(getHand(deck, 1)).toEqual(new List([]));
        });
    });

    describe('given player owns two cards none on board', () => {
        beforeEach(() => {
            cardOne = new Map({ id: 0, owner: 1, boardIndex: -1 });
            cardTwo = new Map({ id: 1, owner: 1, boardIndex: -1 });
            deck = new List([cardOne, cardTwo, new Map({ id: 2, owner: 0 }), new Map({ id: 3, owner: 0 })]);
        });

        it('should contain an empty hand', () => {
            let expected = getHand(deck, 1).toJS();
            let actual = new List([cardOne, cardTwo]).toJS();
            expect(expected).toEqual(actual);
        });
    });

    describe('given player owns two cards one on board', () => {
        beforeEach(() => {
            cardOne = new Map({ id: 0, owner: 1, boardIndex: 1 });
            cardTwo = new Map({ id: 1, owner: 1, boardIndex: -1 });

            deck = new List([cardOne, cardTwo, new Map({ id: 2, owner: 0 }), new Map({ id: 3, owner: 0 })]);
        });

        it('should contain the card not on the board in hand', () => {
            let expected = getHand(deck, 1).toJS();
            let actual = new List([cardTwo]).toJS();
            expect(expected).toEqual(actual);
        });
    });
});