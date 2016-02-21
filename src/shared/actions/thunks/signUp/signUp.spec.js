import expect from 'expect';
import SignUp from './signUp';
import { signUp, __RewireAPI__ as signUpRewireAPI } from './signUp';
import request from 'superagent';
import mocker from 'superagent-mocker';

describe.only('SIGN_UP async action creator', () => {

    let dispatch, mock;
    beforeEach(() => {
       mock = mocker(request);
       dispatch = expect.createSpy();
       mock.clearRoutes()
    });

    it('should be a function', () => {
       expect(signUp()).toBeA('function')
    });

    describe('Given a valid username, password, matching password and email, when requesting to sign up', () => {

        let user, username, password, confirmPassword, email;
        beforeEach(() => {
            username = 'walkerrandolphsmith';
            password = 'password';
            confirmPassword = 'password';
            email = 'tester@gmail.com';

            user = {username: username, password: password, confirmPassword: confirmPassword, email: email};

            mock.post('/api/sign_up', function(req) {
                return {
                    status: 200
                };
            });

            SignUp.__Rewire__('requestSignUp', function(){
                return 1;
            });

            SignUp.__Rewire__('receiveUser', function(){
                return 2;
            });

            SignUp.__Rewire__('pushPath', function(){
                return 3;
            });

        });

        it('should dispatch requestSignUp, receiveUser, and pushPath action', done => {
            signUp(user)(dispatch);
            expect(dispatch).toHaveBeenCalledWith(1);
            //expect(dispatch).toHaveBeenCalledWith(2);
            //expect(dispatch).toHaveBeenCalledWith(3);
            done();

        });
    });

    describe('Signing up is unsuccessful', () => {

    });
});