import expect from 'expect';
import { sendPasswordReset, __RewireAPI__ } from './../index';

describe('src/shared/reducers/sendPasswordReset/thunks/sendPasswordReset', () => {
    let dispatch;
    let email;
    let post;
    let send;
    let set;
    let request;
    beforeEach(() => {
        dispatch = expect.createSpy();
        email = 'walkerrandolphsmith@gmail.com';
        __RewireAPI__.__Rewire__('sendPasswordResetRequest', () => 1);
        __RewireAPI__.__Rewire__('sendPasswordResetSuccess', () => 2);
        __RewireAPI__.__Rewire__('sendPasswordResetFailure', () => 3);
        __RewireAPI__.__Rewire__('sendPasswordResetClear', () => 4);
        __RewireAPI__.__Rewire__('setFormError', () => 5);

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
        expect(sendPasswordReset()).toBeA('function');
    });

    describe('Given a request is made to get reset password', () => {
        beforeEach(() => {
            request.end = (fn) => {
                fn(null, { status: 200 });
            };
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
            request.end = (fn) => {
                fn(null, { status: 200 });
            };
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
            request.end = (fn) => {
                fn(null, {
                    status: 500,
                    body: {
                        invalidEmail: false
                    }
                });
            };
            sendPasswordReset(email)(dispatch);
        });

        it('should dispatch sendPasswordResetFailed action', () => {
            expect(dispatch).toHaveBeenCalledWith(3);
        });
    });

    describe('Given the email is invalid, When resend email verification is unsuccessful', () => {
        beforeEach(() => {
            request.end = (fn) => {
                fn(null, {
                    status: 500,
                    body: {
                        invalidEmail: true
                    }
                });
            };
            sendPasswordReset(email)(dispatch);
        });

        it('should dispatch setFormError action', () => {
            expect(dispatch).toHaveBeenCalledWith(5);
        });

        it('should dispatch sendPasswordResetFailed action', () => {
            expect(dispatch).toHaveBeenCalledWith(3);
        });
    });
});