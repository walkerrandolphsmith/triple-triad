import expect from 'expect';
import { Map } from 'immutable';
import reducer from './signinForm';
import {
    SIGN_IN_FORM_ERROR,
    CLEAR_FORM_ERRORS
} from './../../constants/actionTypes';

describe("Sign up form errors reducer", () => {

    let initialState;
    beforeEach(() => {
        initialState = new Map({
            username: '',
            password: ''
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
            field = 'username';
            error = 'username error';
        });

        it('should handle SIGN_IN_FORM_ERROR action', () => {
            let newState = reducer(initialState, {
                type: SIGN_IN_FORM_ERROR,
                payload: {
                    field: field,
                    error: error
                }
            });
            expect(newState.get(field)).toEqual(error);
        });
    });

    describe("Given a the form validation is reset", () => {

        it('should handle SIGN_IN_FORM_ERROR_RESET action', () => {
            let newState = reducer(initialState, {
                type: CLEAR_FORM_ERRORS
            });
            expect(newState).toEqual(initialState);
        });
    });

});