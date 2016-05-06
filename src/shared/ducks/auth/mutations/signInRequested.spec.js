import expect from 'expect';
import { Map } from 'immutable';
import { signInRequested } from './signInRequested';

describe('src/shared/reducers/auth/mutations/signInRequested', () => {
    describe('Given authentication state', () => {
        let state;
        beforeEach(() => {
            state = new Map({
                signingIn: false
            });
        });

        describe('When attempting to signInRequested', () => {
            let actual;
            beforeEach(() => {
                actual = signInRequested(state);
            });

            it('should set the signingIn state to true', () => {
                expect(actual.get('signingIn')).toEqual(true);
            });
        });
    });
});