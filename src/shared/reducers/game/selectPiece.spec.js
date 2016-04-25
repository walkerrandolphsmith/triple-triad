import expect from 'expect';
import { Map, List } from 'immutable';
import selectPiece from './selectPiece';

describe('src/shared/reducers/selectPiece', () => {
    describe('Given game state and a payload containing the index of a piece', () => {
        let state;
        let payload;
        beforeEach(() => {
            let gameId = 20;
            let game = new Map({
                id: gameId,
                selectedPiece: -1
            });
            state = new Map({
                gameRoute: gameId,
                games: new List([game])
            });
            payload = {
                index: 20
            };
        });

        describe('When selecting a piece', () => {
            let actual;
            beforeEach(() => {
                actual = selectPiece(state, payload);
            });

            it('should set the selectedPiece to the index in the payload', () => {
                expect(actual.get('games').first().get('selectedPiece')).toEqual(payload.index);
            });
        });
    });
});