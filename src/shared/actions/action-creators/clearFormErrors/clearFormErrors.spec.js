import expect from 'expect';
import { CLEAR_FORM_ERRORS } from './../../../constants/actionTypes';
import { clearFormErrors } from './clearFormErrors';

describe('src/shared/actions/action-creators/clearFormErrors', () => {
    describe('Given CLEAR_FORM_ERRORS action type', () => {
        describe('When invoking the clearFormErrors action creator', () => {
            it('should create an action', () => {
                const expectedAction = {
                    type: CLEAR_FORM_ERRORS
                };
                expect(clearFormErrors()).toEqual(expectedAction);
            });
        });
    });
});