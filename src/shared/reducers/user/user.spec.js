import expect from 'expect';
import { Map } from 'immutable';
import reducer from './user';
import { __RewireAPI__ } from './user';
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

describe('Given user state', () => {
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

    describe('When given no state', () => {
        it('should return the initial state', () => {
            expect(reducer(undefined, {})).toEqual(initialState);
        });
    });

    describe('When handling USER_PROFILE', () => {
        let userProfileRequest = expect.createSpy();
        __RewireAPI__.__Rewire__('userProfileRequest', userProfileRequest);

        reducer(initialState, {
            type: USER_PROFILE
        });

        it('should call userProfileRequest', () => {
            expect(userProfileRequest).toHaveBeenCalled();
        });
    });

    describe('When handling USER_PROFILE_SUCCESS', () => {
        let userProfileSuccess = expect.createSpy();
        __RewireAPI__.__Rewire__('userProfileSuccess', userProfileSuccess);

        reducer(initialState, {
            type: USER_PROFILE_SUCCESS
        });

        it('should call userProfileSuccess', () => {
            expect(userProfileSuccess).toHaveBeenCalled();
        });
    });

    describe('When handling RESEND_EMAIL_VERIFICATION', () => {
        let resendVerificationEmailRequest = expect.createSpy();
        __RewireAPI__.__Rewire__('resendVerificationEmailRequest', resendVerificationEmailRequest);

        reducer(initialState, {
            type: RESEND_EMAIL_VERIFICATION
        });

        it('should call resendVerificationEmailRequest', () => {
            expect(resendVerificationEmailRequest).toHaveBeenCalled();
        });
    });

    describe('When handling RESEND_EMAIL_VERIFICATION_SUCCESS', () => {
        let resendVerificationEmailSuccess = expect.createSpy();
        __RewireAPI__.__Rewire__('resendVerificationEmailSuccess', resendVerificationEmailSuccess);

        reducer(initialState, {
            type: RESEND_EMAIL_VERIFICATION_SUCCESS
        });

        it('should call resendVerificationEmailSuccess', () => {
            expect(resendVerificationEmailSuccess).toHaveBeenCalled();
        });
    });

    describe('When handling RESEND_EMAIL_VERIFICATION_FAILED', () => {
        let resendVerificationEmailFailure = expect.createSpy();
        __RewireAPI__.__Rewire__('resendVerificationEmailFailure', resendVerificationEmailFailure);

        reducer(initialState, {
            type: RESEND_EMAIL_VERIFICATION_FAILED
        });

        it('should call resendVerificationEmailFailure', () => {
            expect(resendVerificationEmailFailure).toHaveBeenCalled();
        });
    });

    describe('When handling RESEND_EMAIL_VERIFICATION_CLEAR', () => {
        let resendVerificationEmailClear = expect.createSpy();
        __RewireAPI__.__Rewire__('resendVerificationEmailClear', resendVerificationEmailClear);

        reducer(initialState, {
            type: RESEND_EMAIL_VERIFICATION_CLEAR
        });

        it('should call resendVerificationEmailClear', () => {
            expect(resendVerificationEmailClear).toHaveBeenCalled();
        });
    });

    describe('When handling PASSWORD_RESET_REQUEST', () => {
        let resetPasswordRequest = expect.createSpy();
        __RewireAPI__.__Rewire__('resetPasswordRequest', resetPasswordRequest);

        reducer(initialState, {
            type: PASSWORD_RESET_REQUEST
        });

        it('should call resetPasswordRequest', () => {
            expect(resetPasswordRequest).toHaveBeenCalled();
        });
    });

    describe('When handling PASSWORD_RESET_SUCCESS', () => {
        let resetPasswordSuccess = expect.createSpy();
        __RewireAPI__.__Rewire__('resetPasswordSuccess', resetPasswordSuccess);

        reducer(initialState, {
            type: PASSWORD_RESET_SUCCESS
        });

        it('should call resetPasswordSuccess', () => {
            expect(resetPasswordSuccess).toHaveBeenCalled();
        });
    });

    describe('When handling PASSWORD_RESET_FAILED', () => {
        let resetPasswordFailure = expect.createSpy();
        __RewireAPI__.__Rewire__('resetPasswordFailure', resetPasswordFailure);

        reducer(initialState, {
            type: PASSWORD_RESET_FAILED
        });

        it('should call resetPasswordFailure', () => {
            expect(resetPasswordFailure).toHaveBeenCalled();
        });
    });

    describe('When handling PASSWORD_RESET_CLEAR', () => {
        let resetPasswordClear = expect.createSpy();
        __RewireAPI__.__Rewire__('resetPasswordClear', resetPasswordClear);

        reducer(initialState, {
            type: PASSWORD_RESET_CLEAR
        });

        it('should call resetPasswordClear', () => {
            expect(resetPasswordClear).toHaveBeenCalled();
        });
    });
});