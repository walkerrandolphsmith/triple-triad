import expect from 'expect';
import { Map } from 'immutable';
import reducer from './signupForm';
import { __RewireAPI__ } from './signupForm';
import {
    SIGN_UP_FORM_ERROR,
    CLEAR_FORM_ERRORS
} from './../../constants/actionTypes';

describe('src/shared/reducers/signinForm/signinForm', () => {
    describe('Sign up form errors reducer', () => {
        let initialState;
        beforeEach(() => {
            initialState = new Map({
                username: '',
                password: '',
                confirmPassword: '',
                email: ''
            });
        });

        describe('Given no state', () => {
            it('should return the initial state', () => {
                expect(reducer(undefined, {})).toEqual(initialState);
            });
        });

        describe('When handling SIGN_UP_FORM_ERROR', () => {
            let setFormError = expect.createSpy();
            __RewireAPI__.__Rewire__('setFormError', setFormError);

            reducer(initialState, {
                type: SIGN_UP_FORM_ERROR,
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
});