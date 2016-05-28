import expect from 'expect';
import { Map } from 'immutable';
import reducer from './index';
import {
    RESEND_EMAIL_VERIFICATION_CLEAR,
    RESEND_EMAIL_VERIFICATION_FAILED,
    RESEND_EMAIL_VERIFICATION_REQUEST,
    RESEND_EMAIL_VERIFICATION_SUCCESS,
    __RewireAPI__
} from './index';

describe('src/shared/reducers/resendEmailVerification', () => {
    describe('Given an initial resend verification email state', () => {
        let initialState;
        beforeEach(() => {
            initialState = new Map({
                loading: false,
                loaded: false,
                failed: false
            });
        });

        describe('When given no state', () => {
            it('should return the initial state', () => {
                expect(reducer(undefined, {})).toEqual(initialState);
            });
        });

        describe('When handling RESEND_EMAIL_VERIFICATION_CLEAR', () => {
            let resendVerificationEmailCleared = expect.createSpy();
            __RewireAPI__.__Rewire__('resendVerificationEmailCleared', resendVerificationEmailCleared);

            reducer(initialState, {
                type: RESEND_EMAIL_VERIFICATION_CLEAR
            });

            it('should call resendVerificationEmailCleared', () => {
                expect(resendVerificationEmailCleared).toHaveBeenCalled();
            });
        });
        
        describe('When handling RESEND_EMAIL_VERIFICATION_FAILED', () => {
            let resendVerificationEmailFailed = expect.createSpy();
            __RewireAPI__.__Rewire__('resendVerificationEmailFailed', resendVerificationEmailFailed);

            reducer(initialState, {
                type: RESEND_EMAIL_VERIFICATION_FAILED
            });

            it('should call resendVerificationEmailFailed', () => {
                expect(resendVerificationEmailFailed).toHaveBeenCalled();
            });
        });

        describe('When handling RESEND_EMAIL_VERIFICATION_REQUEST', () => {
            let resendVerificationEmailRequested = expect.createSpy();
            __RewireAPI__.__Rewire__('resendVerificationEmailRequested', resendVerificationEmailRequested);

            reducer(initialState, {
                type: RESEND_EMAIL_VERIFICATION_REQUEST
            });

            it('should call resendVerificationEmailRequested', () => {
                expect(resendVerificationEmailRequested).toHaveBeenCalled();
            });
        });

        describe('When handling RESEND_EMAIL_VERIFICATION_SUCCESS', () => {
            let resendVerificationEmailSucceeded = expect.createSpy();
            __RewireAPI__.__Rewire__('resendVerificationEmailSucceeded', resendVerificationEmailSucceeded);

            reducer(initialState, {
                type: RESEND_EMAIL_VERIFICATION_SUCCESS
            });

            it('should call resendVerificationEmailSucceeded', () => {
                expect(resendVerificationEmailSucceeded).toHaveBeenCalled();
            });
        });
    });
});