import expect from 'expect';
import { Map } from 'immutable';
import reducer from './forgotPasswordForm';
import {
    FORGOT_PASSWORD_FORM_ERROR,
    FORGOT_PASSWORD_FORM_ERROR_RESET
} from './../../constants/actionTypes';

describe("Reset password form errors reducer", () => {

    let initialState;
    beforeEach(() => {
        initialState = new Map({
            email: ''
        });
    });

    describe("Given no state", () => {
        it('should return the initial state', () => {
            expect(reducer(undefined, {})).toEqual(initialState)
        });
    });

    describe("Given a field has an error", () => {

        let field, error;
        beforeEach(() => {
            field = 'email';
            error = 'This user does not exist';
        });

        it('should handle FORGOT_PASSWORD_FORM_ERROR action', () => {
            let newState = reducer(initialState, {
                type: FORGOT_PASSWORD_FORM_ERROR,
                payload: {
                    field: field,
                    error: error
                }
            });
            expect(newState.get(field)).toEqual(error);
        });
    });

    describe("Given a the form validation is reset", () => {

        it('should handle FORGOT_PASSWORD_FORM_ERROR_RESET action', () => {
            let newState = reducer(initialState, {
                type: FORGOT_PASSWORD_FORM_ERROR_RESET
            });
            expect(newState).toEqual(initialState);
        });
    });

});