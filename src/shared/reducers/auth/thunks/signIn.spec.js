import expect from 'expect';
import { signIn } from './../index';
import { __RewireAPI__ } from './../index';

describe('src/shared/reducers/auth/thunks/signIn', () => {
    let dispatch;
    let user;
    let post;
    let send;
    let set;
    let request;
    beforeEach(() => {
        dispatch = expect.createSpy();
        user = {
            username: 'walker',
            password: 'password'
        };

        __RewireAPI__.__Rewire__('isValidUsername', () => true);
        __RewireAPI__.__Rewire__('isValidPassword', () => true);
        __RewireAPI__.__Rewire__('requestSignIn', () => 1);
        __RewireAPI__.__Rewire__('setFormError', () => 2);
        __RewireAPI__.__Rewire__('receiveSignIn', () => 3);
        __RewireAPI__.__Rewire__('push', () => 4);

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
        expect(signIn()).toBeA('function');
    });

    describe('Given a request is made to sign in', () => {
        beforeEach(() => {
            request.end = fn => {
                fn(null, { status: 200 });
            };
            signIn(user)(dispatch);
        });

        it('should request to /api/signIn endpoint', () => {
            expect(post).toHaveBeenCalledWith('/api/signIn');
        });

        it('should send the user with post data', () => {
            expect(send).toHaveBeenCalledWith(JSON.stringify(user));
        });

        it('should set the Accept and Content-Type headers', () => {
            expect(set).toHaveBeenCalled('Accept', 'application/json');
            expect(set).toHaveBeenCalled('Content-Type', 'application/json');
        });
    });

    describe('Signing in is successful', () => {
        beforeEach(() => {
            request.end = fn => {
                fn(null, { status: 200 });
            };
            signIn(user)(dispatch);
        });

        it('should dispatch requestSignIn action', () => {
            expect(dispatch).toHaveBeenCalledWith(1);
        });

        it('should dispatch receiveSignIn action', () => {
            expect(dispatch).toHaveBeenCalledWith(3);
        });
    });

    describe('Signing in is unsuccessful', () => {
        beforeEach(() => {
            request.end = fn => {
                fn(null, { status: 500, text: '{"field": "username", "error": "message"}' });
            };
            signIn(user)(dispatch);
        });

        it('should dispatch requestSignIn action', () => {
            expect(dispatch).toHaveBeenCalledWith(1);
        });

        it('should dispatch signUpFormError action', () => {
            expect(dispatch).toHaveBeenCalledWith(2);
        });
    });

    describe('Given an invalid username', () => {
        beforeEach(() => {
            __RewireAPI__.__Rewire__('isValidUsername', () => false);
            signIn(user)(dispatch);
        });

        it('should dispatch requestSignIn action', () => {
            expect(dispatch).toHaveBeenCalledWith(1);
        });

        it('should dispatch signUpFormError action', () => {
            expect(dispatch).toHaveBeenCalledWith(2);
        });
    });

    describe('Given an invalid password', () => {
        beforeEach(() => {
            __RewireAPI__.__Rewire__('isValidPassword', () => false);
            signIn(user)(dispatch);
        });

        it('should dispatch requestSignIn action', () => {
            expect(dispatch).toHaveBeenCalledWith(1);
        });

        it('should dispatch signUpFormError action', () => {
            expect(dispatch).toHaveBeenCalledWith(2);
        });
    });
});