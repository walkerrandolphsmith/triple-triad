import expect from 'expect';
import { Map } from 'immutable';
import { userProfileRequested } from './../index';

describe('src/shared/reducers/user/userProfileRequested', () => {
    describe('Given user state', () => {
        let state;
        beforeEach(() => {
            state = new Map({
                loading: false,
                loaded: true,
                failed: false
            });
        });

        describe('When requesting user profile', () => {
            let actual;
            beforeEach(() => {
                actual = userProfileRequested(state);
            });

            it('should set loading to true', () => {
                expect(actual.get('loading')).toEqual(true);
            });

            it('should set loaded to false', () => {
                expect(actual.get('loaded')).toEqual(false);
            });

            it('should set failed to false', () => {
                expect(actual.get('failed')).toEqual(false);
            });
        });
    });
});