import { Map } from 'immutable';
import expect from 'expect';
import resetPasswordFormError from './resetPasswordFormError';

describe('Given a state and a payload', () => {
    let state = new Map({
        password: '',
        confirmPassword: ''
    });

    let payload = {
        field: 'password',
        error: 'error'
    };


    describe('When setting a form error on reset password form', () => {

        let actual = resetPasswordFormError(state, payload);

        it('should set state value (for the key equal to the payload field) to the payloads error', () => {
            expect(actual.get('password')).toEqual(payload.error);
        });
    });
});