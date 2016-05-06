import expect from 'expect';
import { Map } from 'immutable';
import { formErrorCleared } from './formErrorCleared';

describe('src/shared/reducers/forms/clearFormError', () => {
    describe('Given an initial state', () => {
        let initialState, newState, payload;
        beforeEach(() => {
            initialState = new Map({
                forgotPassword: new Map({
                    email: ''
                })
            });
            newState = initialState.setIn('forgotPassword.email'.split('.'), 'anything');
            payload = {
                form: 'forgotPassword'
            };
        });

        describe('When clearing all form errors', () => {
            let actual;
            beforeEach(() => {
                actual = formErrorCleared(newState, payload);
            });

            it('should set the return the initial state', () => {
                expect(actual.toJS()).toEqual(initialState.toJS());
            });
        });
    });
});