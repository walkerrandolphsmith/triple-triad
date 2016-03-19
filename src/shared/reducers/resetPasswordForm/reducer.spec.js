import expect from 'expect';
import { Map } from 'immutable';
import reducer from './reducer';
import { __RewireAPI__ } from './reducer';
import {
    RESET_PASSWORD_FORM_ERROR,
    CLEAR_FORM_ERRORS
} from './../../constants/actionTypes';

describe("Given reset password form initial state", () => {

    let initialState;
    let setFormError, clearSpy;
    beforeEach(() => {
        initialState = new Map({
            password: '',
            confirmPassword: ''
        });
        setFormError = expect.createSpy();
        clearSpy = expect.createSpy();

        __RewireAPI__.__Rewire__('setFormError', setFormError);
        __RewireAPI__.__Rewire__('clearFormError', clearSpy);
    });

    describe("Given no state", () => {
        it('should return the initial state', () => {
            expect(reducer(undefined, {})).toEqual(initialState)
        });
    });

    describe("Given a field has an error", () => {
        beforeEach(() => {
            reducer(initialState, {
                type: RESET_PASSWORD_FORM_ERROR,
                payload: {
                    field: 'x',
                    error: 'x'
                }
            });
        });

        it('should call setFormError', () => {
            expect(setFormError).toHaveBeenCalled();
        });
    });

    describe("Given the form errors are reset", () => {
        beforeEach(() => {
            reducer(initialState, {
                type: CLEAR_FORM_ERRORS
            });
        });

        it('should call clearFormError', () => {
            expect(clearSpy).toHaveBeenCalled();
        });
    });

});