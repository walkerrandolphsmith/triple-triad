import expect from 'expect';
import { Map } from 'immutable';
import reducer from './reducer';
import { __RewireAPI__ } from './reducer';
import {
    RESET_PASSWORD_FORM_ERROR,
    CLEAR_FORM_ERRORS
} from './../../constants/actionTypes';

describe("Reset password form errors reducer", () => {

    let initialState;
    let resetSpy, clearSpy;
    beforeEach(() => {
        initialState = new Map({
            password: '',
            confirmPassword: ''
        });
        resetSpy = expect.createSpy();
        clearSpy = expect.createSpy();

        __RewireAPI__.__Rewire__('resetPasswordFormError', resetSpy);
        __RewireAPI__.__Rewire__('clearFormErrors', clearSpy);
    });

    describe("Given no state", () => {
        it('should return the initial state', () => {
            expect(reducer(undefined, {})).toEqual(initialState)
        });
    });

    describe("Given a field has an error", () => {
        let payload;
        beforeEach(() => {
            payload = {
                field: 'x',
                error: 'x'
            };

            reducer(initialState, {
                type: RESET_PASSWORD_FORM_ERROR,
                payload: payload
            });
        });

        it('should call reducer', () => {
            expect(resetSpy).toHaveBeenCalled();
        });
    });

    describe("Given a the form validation is reset", () => {
        let payload;
        beforeEach(() => {
            payload = {};
            reducer(initialState, {
                type: CLEAR_FORM_ERRORS
            });
        });

        it('should call clearFormErrors', () => {
            expect(clearSpy).toHaveBeenCalled();
        });
    });

});