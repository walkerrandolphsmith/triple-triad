import expect from 'expect';
import { SIGN_UP_FORM_ERROR_RESET } from './../../../constants/actionTypes';
import { signUpFormErrorReset } from './signUpFormErrorReset';

describe('SIGN_UP_FORM_ERROR_RESET', () => {

    it('should create an action to set a form error for a given field', () => {
        const expectedAction = {
            type: SIGN_UP_FORM_ERROR_RESET
        };
        expect(signUpFormErrorReset()).toEqual(expectedAction)
    });

});