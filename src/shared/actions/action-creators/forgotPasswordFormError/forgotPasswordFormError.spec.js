import expect from 'expect';
import { FORGOT_PASSWORD_FORM_ERROR } from './../../../constants/actionTypes';
import { forgotPasswordFormError } from './forgotPasswordFormError';

describe('src/shared/actions/action-creators/forgotPasswordFormError', () => {
    let payload;
    let expectedAction;
    beforeEach(() => {
        payload = {
            field: 'email',
            error: 'This user does not exist'
        };
        expectedAction = {
            type: FORGOT_PASSWORD_FORM_ERROR,
            payload: payload
        };
    });

    it('should create an action to set a form error for a given field', () => {
        expect(forgotPasswordFormError(payload)).toEqual(expectedAction);
    });
});