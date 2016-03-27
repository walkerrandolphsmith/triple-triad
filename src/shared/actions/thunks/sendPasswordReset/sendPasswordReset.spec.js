import expect from 'expect';
import SendPasswordReset from './../sendPasswordReset/sendPasswordReset';
import { sendPasswordReset, __RewireAPI__ as sendPasswordResetRewireAPI } from './sendPasswordReset';

describe('SEND PASSWORD RESET async action creator', () => {

    let dispatch;
    let email;
    let post, send, set;
    beforeEach(() => {
        dispatch = expect.createSpy();
        email = 'walkerrandolphsmith@gmail.com';

        SendPasswordReset.__Rewire__('sendPasswordResetRequest', () => 1);
        SendPasswordReset.__Rewire__('sendPasswordResetSuccess', () => 2);
        SendPasswordReset.__Rewire__('sendPasswordResetFailed', () => 3);
        SendPasswordReset.__Rewire__('sendPasswordResetClear', () => 4);
        SendPasswordReset.__Rewire__('forgotPasswordFormError', () => 5);
    });

    it('should be a function', () => {
        expect(sendPasswordReset()).toBeA('function')
    });

    describe('Given a request is made to get reset password', () => {

        beforeEach(() => {
            let request = SendPasswordReset.__Rewire__('request', {
                post: function(endpoint) { return this; },
                send: function(data) { return this },
                set: function(key, value) { return this },
                end: (fn) => {
                    fn(null, { status: 200 });
                }
            });

            post = expect.spyOn(request, 'post').andCallThrough();
            send = expect.spyOn(request, 'send').andCallThrough();
            set = expect.spyOn(request, 'set').andCallThrough();

            sendPasswordReset(email)(dispatch);
        });

        it('should request to /api/forgotPassword endpoint', () => {
            expect(post).toHaveBeenCalledWith('/api/forgotPassword');
        });

        it('should send the user id with post data', () => {
            expect(send).toHaveBeenCalledWith(JSON.stringify({ email: email }));
        });

        it('should set the Accept and Content-Type headers', () => {
            expect(set).toHaveBeenCalled('Accept', 'application/json');
            expect(set).toHaveBeenCalled('Content-Type', 'application/json');
        });
    });

    describe('When reset password is successful', () => {
        beforeEach(() => {
            SendPasswordReset.__Rewire__('request', {
                post: function(endpoint) { return this; },
                send: function(data) { return this },
                set: function(key, value) { return this },
                end: (fn) => {
                    fn(null, { status: 200 });
                }
            });
            sendPasswordReset(email)(dispatch);
        });

        it('should dispatch sendPasswordResetRequest action', () => {
            expect(dispatch).toHaveBeenCalledWith(1);
        });

        it('should dispatch sendPasswordResetSuccess action', () => {
            expect(dispatch).toHaveBeenCalledWith(2);
        });
    });

    describe('Given the email is valid, When resend email verification is unsuccessful', () => {
        beforeEach(() => {
            SendPasswordReset.__Rewire__('request', {
                post: function(endpoint) { return this; },
                send: function(data) { return this },
                set: function(key, value) { return this },
                end: (fn) => {
                    fn(null, {
                        status: 500,
                        body: {
                            invalidEmail: false
                        }
                    });
                }
            });
            sendPasswordReset(email)(dispatch);
        });

        it('should dispatch sendPasswordResetFailed action', () => {
            expect(dispatch).toHaveBeenCalledWith(3);
        });
    });

    describe('Given the email is invalid, When resend email verification is unsuccessful', () => {
        beforeEach(() => {
            SendPasswordReset.__Rewire__('request', {
                post: function(endpoint) { return this; },
                send: function(data) { return this },
                set: function(key, value) { return this },
                end: (fn) => {
                    fn(null, {
                        status: 500,
                        body: {
                            invalidEmail: true
                        }
                    });
                }
            });
            sendPasswordReset(email)(dispatch);
        });

        it('should dispatch forgotPasswordFormError action', () => {
            expect(dispatch).toHaveBeenCalledWith(5);
        });

        it('should dispatch sendPasswordResetFailed action', () => {
            expect(dispatch).toHaveBeenCalledWith(3);
        });
    });
});