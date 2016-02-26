import expect from 'expect';
import { Map, List } from 'immutable';
import GetValidPiece from './getValidPiece';
import { getValidPiece, __RewireAPI__ as getValidPieceRewireAPI } from './getValidPiece';

describe('getValidPiece utility', () => {

    it('should be a function', () => {
        expect(getValidPiece).toBeA('function');
    });

    describe('given a there are no valid pieces to select on the board', () => {
        let game, deck;
        deck =  new List([
            new Map({id: 1, name: "1", owner: 0, boardIndex: 0}),
            new Map({id: 2, name: "2", owner: 0, boardIndex: 1}),
            new Map({id: 3, name: "3", owner: 0, boardIndex: 2}),
            new Map({id: 4, name: "4", owner: 0, boardIndex: 3}),
            new Map({id: 5, name: "5", owner: 0, boardIndex: 4}),
            new Map({id: 6, name: "6", owner: 0, boardIndex: 5}),
            new Map({id: 7, name: "7", owner: 0, boardIndex: 6}),
            new Map({id: 8, name: "8", owner: 1, boardIndex: 7}),
            new Map({id: 9, name: "9", owner: 1, boardIndex: 8})
        ]);

        game = new Map({
            deck: deck
        });

        GetValidPiece.__Rewire__('getBoard', () => {
            return new List([
                deck.get(0), deck.get(1), deck.get(2), deck.get(3), deck.get(4), deck.get(5)
            ]);
        });

        GetValidPiece.__Rewire__('getValidPieces', () => {
            return new List([]);
        });

        GetValidPiece.__Rewire__('sample', () => {
            return 99;
        });

        it('should equal the return -1', () => {
            expect(getValidPiece(game)).toEqual(-1)
        });
    })

});