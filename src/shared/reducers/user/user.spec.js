import expect from 'expect';
import { Map } from 'immutable';
import reducer from './user';
import {
    RESEND_EMAIL_VERIFICATION,
    RESEND_EMAIL_VERIFICATION_SUCCESS,
    RESEND_EMAIL_VERIFICATION_FAILED,
    RESEND_EMAIL_VERIFICATION_CLEAR,
    USER_PROFILE,
    USER_PROFILE_SUCCESS,
    PASSWORD_RESET_SUCCESS,
    PASSWORD_RESET_REQUEST,
    PASSWORD_RESET_FAILED,
    PASSWORD_RESET_CLEAR
    } from './../../constants/actionTypes';

describe("User reducer", () => {

    let initialState;
    beforeEach(() => {
        initialState = new Map({
            loading: false,
            loaded: false,
            user: new Map({
                verified: null
            }),
            resending: false,
            resendingSuccess: false,
            resendingFailure: false,
            passwordReset: new Map({
                loading: false,
                loaded: false,
                failed: false
            })
        });
    });

    describe("Given no state", () => {
        it('should return the initial state', () => {
            expect(reducer(undefined, {})).toEqual(initialState)
        });
    });

    describe("Given fetching user profile data is initiated", () => {

        it('should handle USER_PROFILE action', () => {
            let newState = reducer(initialState, {
                type: USER_PROFILE
            });
            expect(newState.get('loading')).toEqual(true);
        });
    });

    describe("Given fetching user profile data is successful", () => {

        let user;
        beforeEach(() => {
            user = {
                verified: true
            };
        });

        it('should handle USER_PROFILE_SUCCESS action', () => {
            let newState = reducer(initialState, {
                type: USER_PROFILE_SUCCESS,
                payload: {
                    user: user
                }
            });
            expect(newState.get('loading')).toEqual(false);
            expect(newState.get('loaded')).toEqual(true);
            expect(newState.get('user').get('verified')).toEqual(user.verified);
        });
    });

    describe("Given resending the verification email is initiated", () => {

        it('should handle RESEND_EMAIL_VERIFICATION action', () => {
            let newState = reducer(initialState, {
                type: RESEND_EMAIL_VERIFICATION
            });
            expect(newState.get('resending')).toEqual(true);
            expect(newState.get('resendingSuccess')).toEqual(false);
            expect(newState.get('resendingFailure')).toEqual(false);
        });
    });

    describe("Given resending the verification email was successful", () => {

        it('should handle RESEND_EMAIL_VERIFICATION_SUCCESS action', () => {
            let newState = reducer(initialState, {
                type: RESEND_EMAIL_VERIFICATION_SUCCESS
            });
            expect(newState.get('resending')).toEqual(false);
            expect(newState.get('resendingSuccess')).toEqual(true);
            expect(newState.get('resendingFailure')).toEqual(false);
        });
    });

    describe("Given resending the verification email was unsuccessful", () => {

        it('should handle RESEND_EMAIL_VERIFICATION_FAILED action', () => {
            let newState = reducer(initialState, {
                type: RESEND_EMAIL_VERIFICATION_FAILED
            });
            expect(newState.get('resending')).toEqual(false);
            expect(newState.get('resendingSuccess')).toEqual(false);
            expect(newState.get('resendingFailure')).toEqual(true);
        });
    });

    describe("Given the resending of email verification state is cleared ", () => {

        it('should handle RESEND_EMAIL_VERIFICATION_CLEAR action', () => {
            let newState = reducer(initialState, {
                type: RESEND_EMAIL_VERIFICATION_CLEAR
            });
            expect(newState.get('resending')).toEqual(false);
            expect(newState.get('resendingSuccess')).toEqual(false);
            expect(newState.get('resendingFailure')).toEqual(false);
        });
    });

    describe('requesting to reset password', () => {

        it('should handle PASSWORD_RESET_REQUEST by settings the loading state to true', () => {
            let newState = reducer(initialState, {
                type: PASSWORD_RESET_REQUEST
            });
            expect(newState.get('passwordReset').get('loading')).toEqual(true);
            expect(newState.get('passwordReset').get('loaded')).toEqual(false);
            expect(newState.get('passwordReset').get('failed')).toEqual(false);
        });
    });

    describe('resetting a password is successful', () => {

        it('should handle PASSWORD_RESET_SUCCESS by settings the loaded state to true', () => {
            let newState = reducer(initialState, {
                type: PASSWORD_RESET_SUCCESS
            });
            expect(newState.get('passwordReset').get('loading')).toEqual(false);
            expect(newState.get('passwordReset').get('loaded')).toEqual(true);
            expect(newState.get('passwordReset').get('failed')).toEqual(false);
        });
    });

    describe('resetting the password failed', () => {

        it('should handle PASSWORD_RESET_FAILED by settings the failed state to true', () => {
            let newState = reducer(initialState, {
                type: PASSWORD_RESET_FAILED
            });
            expect(newState.get('passwordReset').get('loading')).toEqual(false);
            expect(newState.get('passwordReset').get('loaded')).toEqual(false);
            expect(newState.get('passwordReset').get('failed')).toEqual(true);
        });
    });

    describe('clearing the password reset state', () => {

        it('should handle PASSWORD_RESET_CLEAR by settings all the loaded, loading, and failed to false', () => {
            let newState = reducer(initialState, {
                type: PASSWORD_RESET_CLEAR
            });
            expect(newState.get('passwordReset').get('loading')).toEqual(false);
            expect(newState.get('passwordReset').get('loaded')).toEqual(false);
            expect(newState.get('passwordReset').get('failed')).toEqual(false);
        });
    });

});