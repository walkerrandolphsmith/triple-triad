import expect from 'expect';
import SignUp from './signUp';
import { signUp, __RewireAPI__ as signUpRewireAPI } from './signUp';

describe.only('SIGN_UP async action creator', () => {

    let dispatch, user;
    let post, send, set;
    beforeEach(() => {
       dispatch = expect.createSpy();
       user = {username: 'walkerrandolphsmith', password: 'password', confirmPassword: 'password', email: 'email'};

       SignUp.__Rewire__('isValidUsername', () => true);
       SignUp.__Rewire__('isValidPassword', () => true);
       SignUp.__Rewire__('passwordsMatch', () => true);
       SignUp.__Rewire__('isValidEmail', () => true);
       SignUp.__Rewire__('requestSignUp', () => 1);
       SignUp.__Rewire__('signUpFormError', () => 2);
       SignUp.__Rewire__('receiveUser', () => 3);
       SignUp.__Rewire__('pushPath', () => 4);
    });

    it('should be a function', () => {
       expect(signUp()).toBeA('function')
    });

    describe('Given a request is made to sign up', () => {

        beforeEach(() => {
            let request = SignUp.__Rewire__('request', {
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

            signUp(user)(dispatch);
        });

        it('should request to /api/sign_up endpoint', () => {
            expect(post).toHaveBeenCalledWith('/api/sign_up');
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
            let request = SignUp.__Rewire__('request', {
                post: function(endpoint) { return this; },
                send: function(data) { return this },
                set: function(key, value) { return this },
                end: (fn) => {
                    fn(null, {
                        status: 200
                    });
                }
            });
            signUp(user)(dispatch);
        });

        it('should dispatch requestSignUp action', () => {
            expect(dispatch).toHaveBeenCalledWith(1);
        });

        it('should dispatch receiveUser action', () => {
            expect(dispatch).toHaveBeenCalledWith(3);
        });

        it('should dispatch pushPath action', () => {
            expect(dispatch).toHaveBeenCalledWith(4);
        });
    });

    describe('When /sign_up is unsuccessful', () => {
        beforeEach(() => {
            let request = SignUp.__Rewire__('request', {
                post: function(endpoint) { return this; },
                send: function(data) { return this },
                set: function(key, value) { return this },
                end: (fn) => {
                    fn(null, {
                        status: 500,
                        text: `{ "field": "username", "error": "Username already exists" }`
                    });
                }
            });
            signUp(user)(dispatch);
        });

        it('should dispatch signUpFormError action', () => {
            expect(dispatch).toHaveBeenCalledWith(1);
            expect(dispatch).toHaveBeenCalledWith(2);
        });
    });

    describe('Given an invalid username', () => {
        beforeEach(() => {
            SignUp.__Rewire__('isValidUsername', () => false);
        });

        it('should dispatch signUpFormError action', () => {
            signUp(user)(dispatch);
            expect(dispatch).toHaveBeenCalledWith(1);
            expect(dispatch).toHaveBeenCalledWith(2);
        });
    });

    describe('Given an invalid password', () => {
        beforeEach(() => {
            SignUp.__Rewire__('isValidPassword', () => false);
        });

        it('should dispatch signUpFormError action', () => {
            signUp(user)(dispatch);
            expect(dispatch).toHaveBeenCalledWith(1);
            expect(dispatch).toHaveBeenCalledWith(2);
        });
    });

    describe('Given password does not match the confirm password', () => {
        beforeEach(() => {
            SignUp.__Rewire__('passwordsMatch', () => false);
        });

        it('should dispatch signUpFormError action', () => {
            signUp(user)(dispatch);
            expect(dispatch).toHaveBeenCalledWith(1);
            expect(dispatch).toHaveBeenCalledWith(2);
        });
    });

    describe('Given an invalid email', () => {
        beforeEach(() => {
            SignUp.__Rewire__('isValidEmail', () => false);
        });

        it('should dispatch signUpFormError action', () => {
            signUp(user)(dispatch);
            expect(dispatch).toHaveBeenCalledWith(1);
            expect(dispatch).toHaveBeenCalledWith(2);
        });
    });
});