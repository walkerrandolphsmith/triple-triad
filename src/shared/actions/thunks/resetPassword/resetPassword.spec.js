import expect from 'expect';
import ResetPassword from './resetPassword';
import { resetPassword, __RewireAPI__ as resetPasswordRewireAPI } from './resetPassword';

describe('RESET PASSWORD async action creator', () => {

    let dispatch;
    let token, password, confirmPassword;
    let post, send, set;
    beforeEach(() => {
        dispatch = expect.createSpy();
        token = 100;
        password = 'password';
        confirmPassword = 'password';

        ResetPassword.__Rewire__('passwordResetRequest', () => 1);
        ResetPassword.__Rewire__('passwordResetSuccess', () => 2);
        ResetPassword.__Rewire__('passwordResetFailed', () => 3);
        ResetPassword.__Rewire__('passwordResetClear', () => 4);
        ResetPassword.__Rewire__('resetPasswordFormError', () => 5);

        ResetPassword.__Rewire__('isValidPassword', () => true);
        ResetPassword.__Rewire__('passwordsMatch', () => true);
    });

    it('should be a function', () => {
        expect(resetPassword()).toBeA('function')
    });

    describe('Given a request is made to get reset password', () => {

        beforeEach(() => {
            let request = ResetPassword.__Rewire__('request', {
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

            resetPassword(token, password, confirmPassword)(dispatch);
        });

        it('should request to /api/resetPassword endpoint', () => {
            expect(post).toHaveBeenCalledWith('/api/resetPassword');
        });

        it('should send the user id with post data', () => {
            expect(send).toHaveBeenCalledWith(JSON.stringify({ token: token, password: password, confirmPassword: confirmPassword }));
        });

        it('should set the Accept and Content-Type headers', () => {
            expect(set).toHaveBeenCalled('Accept', 'application/json');
            expect(set).toHaveBeenCalled('Content-Type', 'application/json');
        });
    });

    describe('When reset password is successful', () => {
        beforeEach(() => {
            ResetPassword.__Rewire__('request', {
                post: function(endpoint) { return this; },
                send: function(data) { return this },
                set: function(key, value) { return this },
                end: (fn) => {
                    fn(null, { status: 200 });
                }
            });
            resetPassword(token, password, confirmPassword)(dispatch);
        });

        it('should dispatch passwordResetRequest action', () => {
            expect(dispatch).toHaveBeenCalledWith(1);
        });

        it('should dispatch passwordResetSuccess action', () => {
            expect(dispatch).toHaveBeenCalledWith(2);
        });
    });

    describe('When resend email verification is unsuccessful', () => {
        beforeEach(() => {
            ResetPassword.__Rewire__('request', {
                post: function(endpoint) { return this; },
                send: function(data) { return this },
                set: function(key, value) { return this },
                end: (fn) => {
                    fn(null, { status: 500 });
                }
            });
            resetPassword(token, password, confirmPassword)(dispatch);
        });

        it('should dispatch passwordResetRequest action', () => {
            expect(dispatch).toHaveBeenCalledWith(1);
        });

        it('should dispatch passwordResetFailed action', () => {
            expect(dispatch).toHaveBeenCalledWith(3);
        });
    });

    describe('When password is not valid', () => {
        beforeEach(() => {
            ResetPassword.__Rewire__('isValidPassword', () => false);
            resetPassword(token, password, confirmPassword)(dispatch);
        });

        it('should dispatch resetPasswordFormError action', () => {
            expect(dispatch).toHaveBeenCalledWith(5);
        });
    });

    describe('When passwords do not match', () => {
        beforeEach(() => {
            ResetPassword.__Rewire__('passwordsMatch', () => false);
            resetPassword(token, password, confirmPassword)(dispatch);
        });

        it('should dispatch resetPasswordFormError action', () => {
            expect(dispatch).toHaveBeenCalledWith(5);
        });
    });

});