import expect from 'expect';
import { resendEmailVerification, __RewireAPI__ } from './../index';

describe('RESEND EMAIL VERIFICATION async action creator', () => {
    let dispatch;
    let id;
    let post;
    let send;
    let set;
    let request;
    beforeEach(() => {
        dispatch = expect.createSpy();
        id = 100;

        __RewireAPI__.__Rewire__('resendEmailVerificationRequest', () => 1);
        __RewireAPI__.__Rewire__('resendEmailVerificationSuccess', () => 2);
        __RewireAPI__.__Rewire__('resendEmailVerificationFailed', () => 3);
        __RewireAPI__.__Rewire__('resendEmailVerificationClear', () => 4);

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
        expect(resendEmailVerification()).toBeA('function');
    });

    describe('Given a request is made to get resend email verification', () => {
        beforeEach(() => {
            request.end = fn => {
                fn(null, { status: 200 });
            };
            resendEmailVerification(id)(dispatch);
        });

        it('should request to /api/resendVerificationEmail endpoint', () => {
            expect(post).toHaveBeenCalledWith('/api/resendVerificationEmail');
        });

        it('should send the user id with post data', () => {
            expect(send).toHaveBeenCalledWith(JSON.stringify({ userId: id }));
        });

        it('should set the Accept and Content-Type headers', () => {
            expect(set).toHaveBeenCalled('Accept', 'application/json');
            expect(set).toHaveBeenCalled('Content-Type', 'application/json');
        });
    });

    describe('When resend email verification is successful', () => {
        beforeEach(() => {
            request.end = fn => {
                fn(null, { status: 200 });
            };
            resendEmailVerification(id)(dispatch);
        });

        it('should dispatch resendEmailVerificationRequest action', () => {
            expect(dispatch).toHaveBeenCalledWith(1);
        });

        it('should dispatch resendEmailVerificationSuccess action', () => {
            expect(dispatch).toHaveBeenCalledWith(2);
        });
    });

    describe('When resend email verification is unsuccessful', () => {
        beforeEach(() => {
            request.end = fn => {
                fn(null, { status: 500 });
            };
            resendEmailVerification(id)(dispatch);
        });

        it('should dispatch resendEmailVerificationRequest action', () => {
            expect(dispatch).toHaveBeenCalledWith(1);
        });

        it('should dispatch resendEmailVerificationFailed action', () => {
            expect(dispatch).toHaveBeenCalledWith(3);
        });
    });
});