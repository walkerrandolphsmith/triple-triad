import expect from 'expect';
import { FORGOT_PASSWORD_FORM_ERROR } from './../../../constants/actionTypes';
import { forgotPasswordFormError } from './forgotPasswordFormError';

describe('FORGOT_PASSWORD_FORM_ERROR', () => {

    let payload;
    beforeEach(() => {
        payload = {
            field: 'email',
            error: 'This user does not exist'
        }
    });

    it('should create an action to set a form error for a given field', () => {
        const expectedAction = {
            type: FORGOT_PASSWORD_FORM_ERROR,
            payload: payload
        };
        expect(forgotPasswordFormError(payload)).toEqual(expectedAction)
    });

});