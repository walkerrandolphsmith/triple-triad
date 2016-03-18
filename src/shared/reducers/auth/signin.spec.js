import expect from 'expect';
import { Map } from 'immutable';

import signin from './signin';

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


    describe('When attempting to signin', () => {
        let actual;
        beforeEach(() => {
           actual = signin(state)
        });


        it('should set the signingIn state to true', () => {
           expect(actual.get('signingIn')).toEqual(true);
        });
    });
});