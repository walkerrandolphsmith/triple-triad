import expect from 'expect';
import SignIn from './signIn';
import { signIn, __RewireAPI__ as signInRewireAPI } from './signIn';

describe('SIGN_IN async action creator', () => {

    let dispatch, user;
    let post, send, set;
    beforeEach(() => {
        dispatch = expect.createSpy();
        user = {
            username: 'walker',
            password: 'password'
        };

        SignIn.__Rewire__('isValidUsername', () => {
            return true;
        });

        SignIn.__Rewire__('isValidPassword', () => {
            return true;
        });

        SignIn.__Rewire__('requestSignIn', () => {
            return 1;
        });

        SignIn.__Rewire__('signinFormError', () => {
            return 2;
        });

        SignIn.__Rewire__('receiveSignIn', () => {
            return 3;
        });
    });

    it('should be a function', () => {
       expect(signIn()).toBeA('function')
    });


    describe('Given a request is made to sign in', () => {

        beforeEach(() => {
            let request = SignIn.__Rewire__('request', {
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

            signIn(user)(dispatch);
        });

        it('should request to /api/sign_in endpoint', () => {
            expect(post).toHaveBeenCalledWith('/api/sign_in');
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
            let request = SignIn.__Rewire__('request', {
                post: function(endpoint) { return this; },
                send: function(data) { return this },
                set: function(key, value) { return this },
                end: (fn) => {
                    fn(null, { status: 200 });
                }
            });

            SignIn.__Rewire__('receiveUser', () => {
                return 3;
            });

            SignIn.__Rewire__('pushPath', () => {
                return 4;
            });
        });

        it('should dispatch receiveSignIn action', () => {
            signIn(user)(dispatch);
            expect(dispatch).toHaveBeenCalledWith(1);
            expect(dispatch).toHaveBeenCalledWith(3);
        });
    });

    describe('Signing in is unsuccessful', () => {
        beforeEach(() => {
            let request = SignIn.__Rewire__('request', {
                post: function(endpoint) { return this; },
                send: function(data) { return this },
                set: function(key, value) { return this },
                end: (fn) => {
                    fn(null, { status: 500, text: '{"field": "username", "error": "message"}' });
                }
            });
        });

        it('should dispatch signUpFormError action', () => {
            signIn(user)(dispatch);
            expect(dispatch).toHaveBeenCalledWith(1);
            expect(dispatch).toHaveBeenCalledWith(2);
        });
    });

    describe('Given an invalid username', () => {
        beforeEach(() => {
            SignIn.__Rewire__('isValidUsername', () => {
                return false;
            });
        });

        it('should dispatch signUpFormError action', () => {
            signIn(user)(dispatch);
            expect(dispatch).toHaveBeenCalledWith(1);
            expect(dispatch).toHaveBeenCalledWith(2);
        });
    });

    describe('Given an invalid password', () => {
        beforeEach(() => {
            SignIn.__Rewire__('isValidPassword', () => {
                return false;
            });
        });

        it('should dispatch signUpFormError action', () => {
            signIn(user)(dispatch);
            expect(dispatch).toHaveBeenCalledWith(1);
            expect(dispatch).toHaveBeenCalledWith(2);
        });
    });
});