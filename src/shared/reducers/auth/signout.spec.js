import expect from 'expect';
import { Map } from 'immutable';

import signout from './signout';

describe('Given authentication state', () => {
    let state;
    beforeEach(() => {
        state = new Map({
            signingOut: false
        });
    });

    describe('When attempting to signout', () => {
        let actual;
        beforeEach(() => {
            actual = signout(state);
        });

        it('should set the signingOut state to true', () => {
            expect(actual.get('signingOut')).toEqual(true);
        });
    });
});