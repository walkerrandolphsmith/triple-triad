import expect from 'expect';
import { Map, List } from 'immutable';

import createGameRequest from './createGameRequest';

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

    describe('When attempting to create a new game', () => {
        let actual;
        beforeEach(() => {
            actual = createGameRequest(state)
        });

        it('should set the newGame loading state to true', () => {
            expect(actual.get('newGame').get('loading')).toEqual(true);
        });

        it('should set the newGame loaded state to false', () => {
            expect(actual.get('newGame').get('loaded')).toEqual(false);
        });

        it('should set the newGame failed state to false', () => {
            expect(actual.get('newGame').get('failed')).toEqual(false);
        });
    });
});