import expect from 'expect';
import { Map } from 'immutable';
import { userProfileFailed } from './userProfileFailed';

describe('src/shared/reducers/user/mutations/userProfileFailed', () => {
    describe('Given user profile state', () => {
        let state;
        beforeEach(() => {
            state = new Map({
                loading: true,
                loaded: true,
                failed: false
            });
        });

        describe('When user profile fails to load', () => {
            let actual;
            beforeEach(() => {
               actual = userProfileFailed(state);
            });

            it('should set the loading state to false', () => {
                expect(actual.get('loading')).toEqual(false);
            });

            it('should set the loaded state to false', () => {
                expect(actual.get('loaded')).toEqual(false);
            });

            it('should set the failed state to false', () => {
                expect(actual.get('failed')).toEqual(true);
            });
        });
    });
});