import expect from 'expect';
import { RESET_PASSWORD_FORM_ERROR } from './../../../constants/actionTypes';
import { resetPasswordFormError } from './resetPasswordFormError';

describe('RESET_PASSWORD_FORM_ERROR', () => {
    let payload;
    beforeEach(() => {
        payload = {
            field: 'username',
            error: 'invalid username'
        };
    });

    it('should create an action to set a form error for a given field', () => {
        const expectedAction = {
            type: RESET_PASSWORD_FORM_ERROR,
            payload: payload
        };
        expect(resetPasswordFormError(payload)).toEqual(expectedAction);
    });
});