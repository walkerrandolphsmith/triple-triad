import { Map } from 'immutable';
import expect from 'expect';
import clearFormErrors from './clearFormErrors';

describe('Given a state and a payload', () => {
    let state = new Map({
        password: '',
        confirmPassword: ''
    });

    let payload = {
        field: 'password',
        error: 'error'
    };


    describe('When clearing all form errors on reset password form', () => {

        let actual = clearFormErrors(state);

        it('should set every key is state to empty string', () => {
            expect(actual).toEqual(state);
        });
    });
});