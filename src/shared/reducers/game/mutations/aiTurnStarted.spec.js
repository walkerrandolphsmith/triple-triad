import expect from 'expect';
import { Map } from 'immutable';
import { aiTurnStarted } from './../index';

describe('src/shared/reducers/game/mutations/aiTurnStarted', () => {
    describe('Given game state', () => {
        let state;
        beforeEach(() => {
            state = new Map({});
        });

        describe('When starting Ai turn', () => {
            let actual;
            beforeEach(() => {
                actual = aiTurnStarted(state);
            });

            it('should return the given state', () => {
                expect(actual).toEqual(state);
            });
        });
    });
});