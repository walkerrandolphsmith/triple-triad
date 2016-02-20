import expect from 'expect';
import { FORGOT_PASSWORD_FORM_ERROR_RESET } from './../../../constants/actionTypes';
import { forgotPasswordFormErrorReset } from './forgotPasswordFormErrorReset';

describe('FORGOT_PASSWORD_FORM_ERROR_RESET', () => {

    it('should create an action to set a form error for a given field', () => {
        const expectedAction = {
            type: FORGOT_PASSWORD_FORM_ERROR_RESET
        };
        expect(forgotPasswordFormErrorReset()).toEqual(expectedAction)
    });

});