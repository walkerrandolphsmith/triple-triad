import expect from 'expect';
import { Map, List } from 'immutable';

import getGamesRequest from './getGamesRequest';

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

    describe('When attempting to get all games', () => {
        let actual;
        beforeEach(() => {
            actual = getGamesRequest(state)
        });

        it('should set the getGames loading state to true', () => {
            expect(actual.get('getGames').get('loading')).toEqual(true);
        });

        it('should set the getGames loaded state to false', () => {
            expect(actual.get('getGames').get('loaded')).toEqual(false);
        });

        it('should set the getGames failed state to false', () => {
            expect(actual.get('getGames').get('failed')).toEqual(false);
        });
    });
});