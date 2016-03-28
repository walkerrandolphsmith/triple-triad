import expect from 'expect';
import { Map } from 'immutable';
import reducer from './forgotPasswordForm';
import { __RewireAPI__ } from './forgotPasswordForm';
import {
    FORGOT_PASSWORD_FORM_ERROR,
    CLEAR_FORM_ERRORS
} from './../../constants/actionTypes';

describe('Given an initial forgot password form state', () => {
    let initialState;
    beforeEach(() => {
        initialState = new Map({
            email: ''
        });
    });

    describe('When given no state', () => {
        it('should return the initial state', () => {
            expect(reducer(undefined, {})).toEqual(initialState);
        });
    });

    describe('When handling FORGOT_PASSWORD_FORM_ERROR', () => {
        let setFormError = expect.createSpy();
        __RewireAPI__.__Rewire__('setFormError', setFormError);

        reducer(initialState, {
            type: FORGOT_PASSWORD_FORM_ERROR,
            payload: {
                field: 'email',
                error: 'message'
            }
        });

        it('should call setFormError', () => {
            expect(setFormError).toHaveBeenCalled();
        });
    });

    describe('When handling CLEAR_FORM_ERRORS', () => {
        let clearFormError = expect.createSpy();
        __RewireAPI__.__Rewire__('clearFormError', clearFormError);

        reducer(initialState, {
            type: CLEAR_FORM_ERRORS
        });

        it('should call clearFormError', () => {
            expect(clearFormError).toHaveBeenCalled();
        });
    });
});