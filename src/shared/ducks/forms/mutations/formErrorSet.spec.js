import expect from 'expect';
import { Map } from 'immutable';
import { formErrorSet } from './formErrorSet';

describe('src/shared/reducers/forms/setFormError', () => {
    describe('Given a state and a payload with field value of email', () => {
        let state;
        let payload;
        beforeEach(() => {
            state = new Map({
                signIn: new Map({
                    email: ''
                })
            });
            payload = {
                form: 'signIn',
                field: 'email',
                error: 'message'
            };
        });

        describe('When setting a form error', () => {
            let actual;
            beforeEach(() => {
                actual = formErrorSet(state, payload);
            });

            it('should set the value of the state key, corresponding to the payload field, to the payload error value', () => {
                expect(actual.get(payload.form).get(payload.field)).toEqual(payload.error);
            });
        });
    });
});