import expect from 'expect';
import { Map } from 'immutable';
import { signUpRequested } from './signUpRequested';

describe('src/shared/reducers/auth/mutations/signUpRequested', () => {
    describe('Given authentication state', () => {
        let state;
        beforeEach(() => {
            state = new Map({
                signingUp: false
            });
        });

        describe('When attempting to signUpRequested', () => {
            let actual;
            beforeEach(() => {
                actual = signUpRequested(state);
            });

            it('should set the signingUp state to true', () => {
                expect(actual.get('signingUp')).toEqual(true);
            });
        });
    });
});