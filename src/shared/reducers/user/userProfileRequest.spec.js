import expect from 'expect';
import { Map } from 'immutable';
import userProfileRequest from './userProfileRequest';

describe('src/shared/reducers/user/userProfileRequest', () => {
    describe('Given user state', () => {
        let state;
        beforeEach(() => {
            state = new Map({
                loading: false,
                loaded: true
            });
        });

        describe('When requesting user profile', () => {
            let actual;
            beforeEach(() => {
                actual = userProfileRequest(state);
            });

            it('should set loading to true', () => {
                expect(actual.get('loading')).toEqual(true);
            });

            it('should set loaded to false', () => {
                expect(actual.get('loaded')).toEqual(false);
            });
        });
    });
});