import expect from 'expect';
import { Map } from 'immutable';
import signup from './signup';

describe('src/shared/reducers/auth/signup', () => {
    describe('Given authentication state', () => {
        let state;
        beforeEach(() => {
            state = new Map({
                signingUp: false
            });
        });

        describe('When attempting to signup', () => {
            let actual;
            beforeEach(() => {
                actual = signup(state);
            });

            it('should set the signingUp state to true', () => {
                expect(actual.get('signingUp')).toEqual(true);
            });
        });
    });
});