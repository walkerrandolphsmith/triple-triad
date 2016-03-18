import expect from 'expect';
import { Map } from 'immutable';

import signup from './signup';

describe('Given authentication state', () => {
    let state;
    beforeEach(() => {
        state = new Map({
            loading: false,
            loaded: false,
            signingIn: false,
            signingOut: false,
            signingUp: false,
            user: new Map({
                username: null,
                id: null
            })
        });
    });


    describe('When attempting to signup', () => {
        let actual;
        beforeEach(() => {
            actual = signup(state)
        });


        it('should set the signingUp state to true', () => {
            expect(actual.get('signingUp')).toEqual(true);
        });
    });
});