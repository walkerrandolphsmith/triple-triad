import expect from 'expect';
import { CLEAR_FORM_ERRORS } from './../../../constants/actionTypes';
import { clearFormErrors } from './clearFormErrors';

describe('CLEAR_FORM_ERRORS', () => {

    it('should create an action to remove all form errors', () => {
        const expectedAction = {
            type: CLEAR_FORM_ERRORS
        };
        expect(clearFormErrors()).toEqual(expectedAction)
    });

});