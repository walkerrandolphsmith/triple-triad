import expect from 'expect';
import ResendEmailVerification from './resendEmailVerification';
import { resendEmailVerification, __RewireAPI__ as resendEmailVerificationRewireAPI } from './resendEmailVerification';

describe('RESEND EMAIL VERIFICATION async action creator', () => {

    let dispatch, id;
    let post, send, set;
    beforeEach(() => {
       dispatch = expect.createSpy();
        id = 100;

        ResendEmailVerification.__Rewire__('resendEmailVerificationRequest', () => 1);
        ResendEmailVerification.__Rewire__('resendEmailVerificationSuccess', () => 2);
        ResendEmailVerification.__Rewire__('resendEmailVerificationFailed', () => 3);
        ResendEmailVerification.__Rewire__('resendEmailVerificationClear', () => 4);
    });

    it('should be a function', () => {
       expect(resendEmailVerification()).toBeA('function')
    });

    describe('Given a request is made to get resend email verification', () => {

        beforeEach(() => {
            let request = ResendEmailVerification.__Rewire__('request', {
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
            ResendEmailVerification.__Rewire__('request', {
                post: function(endpoint) { return this; },
                send: function(data) { return this },
                set: function(key, value) { return this },
                end: (fn) => {
                    fn(null, { status: 200 });
                }
            });
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
            ResendEmailVerification.__Rewire__('request', {
                post: function(endpoint) { return this; },
                send: function(data) { return this },
                set: function(key, value) { return this },
                end: (fn) => {
                    fn(null, { status: 500 });
                }
            });
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