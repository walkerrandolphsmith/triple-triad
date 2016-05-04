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
    USER_PROFILE_SUCCESS
} from './../../constants/actionTypes';

describe('src/shared/reducers/user/user', () => {
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
                resendingFailure: false
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
    });
});