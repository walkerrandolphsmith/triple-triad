import expect from 'expect';
import SignIn from './signIn';
import { signIn, __RewireAPI__ as signInRewireAPI } from './signIn';
import request from 'superagent';
import mocker from 'superagent-mocker';

describe('SIGN_IN async action creator', () => {

    let mock, dispatch, user;
    beforeEach(() => {
        mock = mocker(request);
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

    afterEach(() => {
        mock.clearRoutes();
    });

    it('should be a function', () => {
       expect(signIn()).toBeA('function')
    });

    describe('Signing in is successful', () => {
        beforeEach(() => {
            mock.post('/api/sign_in', function(req) {
                return {
                    status: 200
                };
            });

            SignIn.__Rewire__('receiveUser', () => {
                return 3;
            });

            SignIn.__Rewire__('pushPath', () => {
                return 4;
            });
        });

        it('should dispatch receiveSignIn action', done => {
            signIn(user)(dispatch);
            expect(dispatch).toHaveBeenCalledWith(1);
            setTimeout(() => {
                expect(dispatch).toHaveBeenCalledWith(3);
                done();
            }, 0);
        });
    });

    describe('Signing in is unsuccessful', () => {
        beforeEach(() => {
            mock.post('/api/sign_in', function(req) {
                return {
                    status: 500,
                    text: `{
                        "field": "username",
                        "error": "Username already exists"
                    }`
                };
            });
        });

        it('should dispatch signUpFormError action', done => {
            signIn(user)(dispatch);
            expect(dispatch).toHaveBeenCalledWith(1);
            setTimeout(() => {
                expect(dispatch).toHaveBeenCalledWith(2);
                done();
            }, 200);
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