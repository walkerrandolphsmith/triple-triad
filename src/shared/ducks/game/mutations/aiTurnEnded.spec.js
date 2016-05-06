import expect from 'expect';
import { Map } from 'immutable';
import { aiTurnEnded } from './aiTurnEnded';

describe('src/shared/reducers/game/mutations/aiTurnEnded', () => {
    describe('Given game state', () => {
        let state;
        beforeEach(() => {
            state = new Map({});
        });

        describe('When ending Ai turn', () => {
            let actual;
            beforeEach(() => {
                actual = aiTurnEnded(state);
            });

            it('should return the given state', () => {
                expect(actual).toEqual(state);
            });
        });
    });
});