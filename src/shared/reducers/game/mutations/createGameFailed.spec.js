import expect from 'expect';
import { Map } from 'immutable';
import { createGameFailed } from './createGameFailed';

describe('src/shared/reducers/game/mutations/createGameFailed', () => {
    describe('Given games state', () => {
        let state;
        beforeEach(() => {
            state = new Map({
                newGame: new Map({
                    loading: false,
                    loaded: false,
                    failed: false
                })
            });
        });

        describe('When creating a new game fails', () => {
            let actual;
            beforeEach(() => {
                actual = createGameFailed(state);
            });

            it('should set the newGame loading state to false', () => {
                expect(actual.get('newGame').get('loading')).toEqual(false);
            });

            it('should set the newGame loaded state to false', () => {
                expect(actual.get('newGame').get('loaded')).toEqual(false);
            });

            it('should set the newGame failed state to true', () => {
                expect(actual.get('newGame').get('failed')).toEqual(true);
            });
        });
    });
});