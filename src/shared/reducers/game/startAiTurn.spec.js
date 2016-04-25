import expect from 'expect';
import { Map } from 'immutable';
import startAiTurn from './startAiTurn';

describe('src/shared/reducers/game/startAiTurn', () => {
    describe('Given game state', () => {
        let state;
        beforeEach(() => {
            state = new Map({});
        });

        describe('When starting Ai turn', () => {
            let actual;
            beforeEach(() => {
                actual = startAiTurn(state);
            });

            it('should return the given state', () => {
                expect(actual).toEqual(state);
            });
        });
    });
});