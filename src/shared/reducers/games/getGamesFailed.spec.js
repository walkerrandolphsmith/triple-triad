import expect from 'expect';
import { Map, List } from 'immutable';

import getGamesFailed from './getGamesFailed';

describe('Given games state', () => {
    let state;
    beforeEach(() => {
        state = new Map({
            getGames: new Map({
                loading: false,
                loaded: false,
                failed: false
            })
        });
    });

    describe('When getting all games fails', () => {
        let actual;
        beforeEach(() => {
            actual = getGamesFailed(state)
        });

        it('should set the getGames loading state to false', () => {
            expect(actual.get('getGames').get('loading')).toEqual(false);
        });

        it('should set the getGames loaded state to false', () => {
            expect(actual.get('getGames').get('loaded')).toEqual(false);
        });

        it('should set the getGames failed state to true', () => {
            expect(actual.get('getGames').get('failed')).toEqual(true);
        });
    });
});