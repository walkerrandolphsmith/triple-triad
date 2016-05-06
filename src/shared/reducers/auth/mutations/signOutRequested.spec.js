import expect from 'expect';
import { Map } from 'immutable';
import { signOutRequested } from './signOutRequested';

describe('src/shared/reducers/auth/mutations/signOutRequested', () => {
    describe('Given authentication state', () => {
        let state;
        beforeEach(() => {
            state = new Map({
                signingOut: false
            });
        });

        describe('When attempting to signOutRequested', () => {
            let actual;
            beforeEach(() => {
                actual = signOutRequested(state);
            });

            it('should set the signingOut state to true', () => {
                expect(actual.get('signingOut')).toEqual(true);
            });
        });
    });
});