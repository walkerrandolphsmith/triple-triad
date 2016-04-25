import expect from 'expect';
import { Map } from 'immutable';
import signin from './signin';

describe('src/shared/reducers/auth/signin', () => {
    describe('Given authentication state', () => {
        let state;
        beforeEach(() => {
            state = new Map({
                signingIn: false
            });
        });

        describe('When attempting to signin', () => {
            let actual;
            beforeEach(() => {
                actual = signin(state);
            });

            it('should set the signingIn state to true', () => {
                expect(actual.get('signingIn')).toEqual(true);
            });
        });
    });
});