import expect from 'expect';
import SignUp from './signUp';
import { signUp, __RewireAPI__ as signUpRewireAPI } from './signUp';
import request from 'superagent';
import mocker from 'superagent-mocker';

describe('SIGN_UP async action creator', () => {

    let dispatch, mock, user;
    beforeEach(() => {
       mock = mocker(request);
       dispatch = expect.createSpy();
       user = {username: 'walkerrandolphsmith', password: 'password', confirmPassword: 'password', email: 'email'};

        SignUp.__Rewire__('isValidUsername', function(){
            return true;
        });

        SignUp.__Rewire__('isValidPassword', function(){
            return true;
        });

        SignUp.__Rewire__('passwordsMatch', function(){
            return true;
        });

        SignUp.__Rewire__('isValidEmail', function(){
            return true;
        });

         SignUp.__Rewire__('requestSignUp', function(){
             return 1;
         });

         SignUp.__Rewire__('signUpFormError', function(){
             return 2;
         });
    });

    afterEach(() => {
        mock.clearRoutes();
    });

    it('should be a function', () => {
       expect(signUp()).toBeA('function')
    });

    describe('When /sign_up is unsuccessful', () => {
        beforeEach(() => {
            mock.post('/api/sign_up', function(req) {
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
            signUp(user)(dispatch);
            expect(dispatch).toHaveBeenCalledWith(1);
            setTimeout(() => {
                expect(dispatch).toHaveBeenCalledWith(2);
                done();
            }, 200);
        });
    });

    describe('Given a valid username, password, matching password and email, when requesting to sign up', () => {
        beforeEach(() => {
            mock.post('/api/sign_up', function(req) {
                return {
                    status: 200
                };
            });

            SignUp.__Rewire__('receiveUser', function(){
                return 3;
            });

            SignUp.__Rewire__('pushPath', function(){
                return 4;
            });
        });

        it('should dispatch requestSignUp, receiveUser, and pushPath action', done => {
            signUp(user)(dispatch);
            expect(dispatch).toHaveBeenCalledWith(1);
            setTimeout(() => {
                expect(dispatch).toHaveBeenCalledWith(3);
                expect(dispatch).toHaveBeenCalledWith(4);
                done();
            }, 0);
        });
    });

    describe('Given an invalid username', () => {
        beforeEach(() => {
            SignUp.__Rewire__('isValidUsername', function(){
                return false;
            });
        });

        it('should dispatch signUpFormError action', () => {
            signUp(user)(dispatch);
            expect(dispatch).toHaveBeenCalledWith(1);
            expect(dispatch).toHaveBeenCalledWith(2);
        });
    });

    describe('Given an invalid password', () => {
        beforeEach(() => {
            SignUp.__Rewire__('isValidPassword', function(){
                return false;
            });
        });

        it('should dispatch signUpFormError action', () => {
            signUp(user)(dispatch);
            expect(dispatch).toHaveBeenCalledWith(1);
            expect(dispatch).toHaveBeenCalledWith(2);
        });
    });

    describe('Given password does not match the confirm password', () => {
        beforeEach(() => {
            SignUp.__Rewire__('passwordsMatch', function(){
                return false;
            });
        });

        it('should dispatch signUpFormError action', () => {
            signUp(user)(dispatch);
            expect(dispatch).toHaveBeenCalledWith(1);
            expect(dispatch).toHaveBeenCalledWith(2);
        });
    });

    describe('Given an invalid email', () => {
        beforeEach(() => {
            SignUp.__Rewire__('isValidEmail', function(){
                return false;
            });
        });

        it('should dispatch signUpFormError action', () => {
            signUp(user)(dispatch);
            expect(dispatch).toHaveBeenCalledWith(1);
            expect(dispatch).toHaveBeenCalledWith(2);
        });
    });
});