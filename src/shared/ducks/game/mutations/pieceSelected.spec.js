import expect from 'expect';
import { Map, List } from 'immutable';
import { pieceSelected } from './pieceSelected';
import { GameRecord } from './../../../ducks/game/records';

describe('src/shared/reducers/game/mutations/pieceSelected', () => {
    describe('Given game state and a payload containing the index of a piece', () => {
        let state;
        let payload;
        beforeEach(() => {
            let gameId = 20;
            let game = new GameRecord({
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
                actual = pieceSelected(state, payload);
            });

            it('should set the selectedPiece to the index in the payload', () => {
                expect(actual.get('games').first().selectedPiece).toEqual(payload.index);
            });
        });
    });
});