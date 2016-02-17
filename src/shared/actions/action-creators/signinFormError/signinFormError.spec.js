import expect from 'expect';
import { SIGN_IN_FORM_ERROR } from './../../../constants/actionTypes';
import { signinFormError } from './signinFormError';

describe('SIGN_IN_FORM_ERROR', () => {

    let payload;
    beforeEach(() => {
        payload = {
            field: 'username',
            error: 'invalid username'
        }
    });

    it('should create an action to set a form error for a given field', () => {
        const expectedAction = {
            type: SIGN_IN_FORM_ERROR,
            payload: payload
        };
        expect(signinFormError(payload)).toEqual(expectedAction)
    });

});