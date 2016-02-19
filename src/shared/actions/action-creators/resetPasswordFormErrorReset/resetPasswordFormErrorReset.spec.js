import expect from 'expect';
import { RESET_PASSWORD_FORM_ERROR_RESET } from './../../../constants/actionTypes';
import { resetPasswordFormErrorReset } from './resetPasswordFormErrorReset';

describe('RESET_PASSWORD_FORM_ERROR_RESET', () => {

    it('should create an action to set a form error for a given field', () => {
        const expectedAction = {
            type: RESET_PASSWORD_FORM_ERROR_RESET
        };
        expect(resetPasswordFormErrorReset()).toEqual(expectedAction)
    });

});