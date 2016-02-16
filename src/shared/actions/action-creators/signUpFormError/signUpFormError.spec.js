import expect from 'expect';
import { SIGN_UP_FORM_ERROR } from './../../../constants/actionTypes';
import { signUpFormError } from './signUpFormError';

describe('SIGN_UP_FORM_ERROR', () => {

    let payload;
    beforeEach(() => {
        payload = {
            field: 'username',
            error: 'invalid username'
        }
    });

    it('should create an action to set a form error for a given field', () => {
        const expectedAction = {
            type: SIGN_UP_FORM_ERROR,
            payload: payload
        };
        expect(signUpFormError(payload)).toEqual(expectedAction)
    });

});