import expect from 'expect';
import { passwordReset, __RewireAPI__ } from './../index';

describe('src/shared/reducers/passwordReset/thunks/passwordReset', () => {
    let dispatch;
    let token;
    let password;
    let confirmPassword;
    let post;
    let send;
    let set;
    let request;
    beforeEach(() => {
        dispatch = expect.createSpy();
        token = 100;
        password = 'password';
        confirmPassword = 'password';

        __RewireAPI__.__Rewire__('passwordResetRequest', () => 1);
        __RewireAPI__.__Rewire__('passwordResetSuccess', () => 2);
        __RewireAPI__.__Rewire__('passwordResetFailure', () => 3);
        __RewireAPI__.__Rewire__('passwordResetClear', () => 4);
        __RewireAPI__.__Rewire__('setFormError', () => 5);

        __RewireAPI__.__Rewire__('isValidPassword', () => true);
        __RewireAPI__.__Rewire__('passwordsMatch', () => true);

        request = __RewireAPI__.__Rewire__('request', {
            post: function() {
                return this;
            },
            send: function() {
                return this;
            },
            set: function() {
                return this;
            }
        });
        post = expect.spyOn(request, 'post').andCallThrough();
        send = expect.spyOn(request, 'send').andCallThrough();
        set = expect.spyOn(request, 'set').andCallThrough();
    });

    it('should be a function', () => {
        expect(passwordReset()).toBeA('function');
    });

    describe('Given a request is made to get reset password', () => {
        beforeEach(() => {
            request.end = fn => {
                fn(null, { status: 200 });
            };
            passwordReset(token, password, confirmPassword)(dispatch);
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
            request.end = fn => {
                fn(null, { status: 200 });
            };
            passwordReset(token, password, confirmPassword)(dispatch);
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
            request.end = fn => {
                fn(null, { status: 500 });
            };
            passwordReset(token, password, confirmPassword)(dispatch);
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
            __RewireAPI__.__Rewire__('isValidPassword', () => false);
            passwordReset(token, password, confirmPassword)(dispatch);
        });

        it('should dispatch setFormError action', () => {
            expect(dispatch).toHaveBeenCalledWith(5);
        });
    });

    describe('When passwords do not match', () => {
        beforeEach(() => {
            __RewireAPI__.__Rewire__('passwordsMatch', () => false);
            passwordReset(token, password, confirmPassword)(dispatch);
        });

        it('should dispatch setFormError action', () => {
            expect(dispatch).toHaveBeenCalledWith(5);
        });
    });
});