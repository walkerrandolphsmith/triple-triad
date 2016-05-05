import expect from 'expect';
import { signUp } from './../index';
import { __RewireAPI__ } from './../index';

describe('src/shared/reducers/auth/thunks/signUp', () => {
    let dispatch;
    let user;
    let post;
    let send;
    let set;
    let request;
    beforeEach(() => {
        dispatch = expect.createSpy();
        user = { username: 'walkerrandolphsmith', password: 'password', confirmPassword: 'password', email: 'email' };

        __RewireAPI__.__Rewire__('isValidUsername', () => true);
        __RewireAPI__.__Rewire__('isValidPassword', () => true);
        __RewireAPI__.__Rewire__('passwordsMatch', () => true);
        __RewireAPI__.__Rewire__('isValidEmail', () => true);
        __RewireAPI__.__Rewire__('requestSignUp', () => 1);
        __RewireAPI__.__Rewire__('setFormError', () => 2);
        __RewireAPI__.__Rewire__('receiveUser', () => 3);
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
        expect(signUp()).toBeA('function');
    });

    describe('Given a request is made to sign up', () => {
        beforeEach(() => {
            request.end = fn => {
                fn(null, { status: 200 });
            };
            signUp(user)(dispatch);
        });

        it('should request to /api/signUp endpoint', () => {
            expect(post).toHaveBeenCalledWith('/api/signUp');
        });

        it('should send the user with post data', () => {
            expect(send).toHaveBeenCalledWith(JSON.stringify(user));
        });

        it('should set the Accept and Content-Type headers', () => {
            expect(set).toHaveBeenCalled('Accept', 'application/json');
            expect(set).toHaveBeenCalled('Content-Type', 'application/json');
        });
    });

    describe('when sign up is successful', () => {
        beforeEach(() => {
            request.end = fn => {
                fn(null, { status: 200 });
            };
            signUp(user)(dispatch);
        });

        it('should dispatch requestSignUp action', () => {
            expect(dispatch).toHaveBeenCalledWith(1);
        });

        it('should dispatch receiveUser action', () => {
            expect(dispatch).toHaveBeenCalledWith(3);
        });

        it('should dispatch push action', () => {
            expect(dispatch).toHaveBeenCalledWith(4);
        });
    });

    describe('When /signUp is unsuccessful', () => {
        beforeEach(() => {
            request.end = fn => {
                fn(null, {
                    status: 500,
                    text: `{ "field": "username", "error": "Username already exists" }`
                });
            };
            signUp(user)(dispatch);
        });

        it('should dispatch setFormError action', () => {
            expect(dispatch).toHaveBeenCalledWith(1);
            expect(dispatch).toHaveBeenCalledWith(2);
        });
    });

    describe('Given an invalid username', () => {
        beforeEach(() => {
            __RewireAPI__.__Rewire__('isValidUsername', () => false);
        });

        it('should dispatch setFormError action', () => {
            signUp(user)(dispatch);
            expect(dispatch).toHaveBeenCalledWith(1);
            expect(dispatch).toHaveBeenCalledWith(2);
        });
    });

    describe('Given an invalid password', () => {
        beforeEach(() => {
            __RewireAPI__.__Rewire__('isValidPassword', () => false);
        });

        it('should dispatch setFormError action', () => {
            signUp(user)(dispatch);
            expect(dispatch).toHaveBeenCalledWith(1);
            expect(dispatch).toHaveBeenCalledWith(2);
        });
    });

    describe('Given password does not match the confirm password', () => {
        beforeEach(() => {
            __RewireAPI__.__Rewire__('passwordsMatch', () => false);
        });

        it('should dispatch setFormError action', () => {
            signUp(user)(dispatch);
            expect(dispatch).toHaveBeenCalledWith(1);
            expect(dispatch).toHaveBeenCalledWith(2);
        });
    });

    describe('Given an invalid email', () => {
        beforeEach(() => {
            __RewireAPI__.__Rewire__('isValidEmail', () => false);
        });

        it('should dispatch setFormError action', () => {
            signUp(user)(dispatch);
            expect(dispatch).toHaveBeenCalledWith(1);
            expect(dispatch).toHaveBeenCalledWith(2);
        });
    });
});