import expect from 'expect';
import SignUp from './../../../../src/shared/actions/thunks/signUp';
import { signUp, __RewireAPI__ as signUpRewireAPI } from './../../../../src/shared/actions/thunks/signUp';

describe('SIGN_OUT async action creator', () => {

    let dispatch, cookie, userNameLabel, username;
    beforeEach(() => {
       userNameLabel = 'username';
       username = 'walker';
       dispatch = expect.createSpy();

        SignUp.__Rewire__('requestSignUp', function(){
            return 1;
        });

        SignUp.__Rewire__('receiveUser', function(){
            return 2;
        });

        SignUp.__Rewire__('pushPath', function(){
            return '/';
        });

        cookie = SignUp.__Rewire__('cookie', {
            save: (usernameLabel, username) => { return 'xxx' }
        });
    });

    it('should be a function', () => {
       expect(signUp()).toBeA('function')
    });

    describe('Signing out is successful', () => {

        let fetch;
        beforeEach(() => {
            fetch = SignUp.__Rewire__('fetch', function(){
                return Promise.resolve({ok: true});
            });
        });

        it('should dispatch requestSignIn action', () => {
            fetch().then(response => {
                expect(dispatch).toHaveBeenCalledWith(1)
            });
        });

        it('should call cookie given the username', () => {
            fetch().then(response => {
                expect(cookie).toHaveBeenCalled(userNameLabel, username)
            });
        });

        it('should dispatch receiveSignIn action', () => {
            fetch().then(response => {
                expect(dispatch).toHaveBeenCalledWith(2)
            });
        });

        it('should dispatch update route action', () => {
            fetch().then(response => {
                expect(dispatch).toHaveBeenCalledWith('newRoute')
            });
        });

    });

    describe('Signing out is unsuccessful', () => {

        let fetch;
        beforeEach(() => {
            fetch = SignUp.__Rewire__('fetch', function(){
                return Promise.resolve({ok: false});
            });
        });

        it('should not dispatch any actions', () => {
            fetch().then(response => {
                expect(dispatch).toNotHaveBeenCalled();
            });
        });

    });
});