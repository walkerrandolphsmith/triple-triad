import expect from 'expect';
import { Map } from 'immutable';
import clearFormError from './clearFormError';


describe('Given an initial state', () => {
    let state;
    const initialState = new Map({
        email: ''
    });
    beforeEach(() => {
        state = initialState.set('email', 'anything');
    });

    describe('When clearing all form errors', () => {
        let actual;
        beforeEach(() => {
            actual = clearFormError(initialState);
        });

        it('should set the return the initial state', () => {
            expect(actual).toEqual(initialState);
        });
    });
});