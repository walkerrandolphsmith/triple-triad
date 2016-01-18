import expect from 'expect';
import SignIn from './../../../../src/shared/actions/thunks/signIn';
import { signIn, __RewireAPI__ as signInRewireAPI } from './../../../../src/shared/actions/thunks/signIn';

describe('SIGN_IN async action creator', () => {

    let dispatch, user, cookie;
    beforeEach(() => {
       dispatch = expect.createSpy();
        user = {
            username: 'walker'
        };

        SignIn.__Rewire__('requestSignIn', function(){
            return 1;
        });

        SignIn.__Rewire__('receiveSignIn', function(){
            return 2;
        });

        SignIn.__Rewire__('pushPath', function(){
            return 'newRoute';
        });

        cookie = SignIn.__Rewire__('cookie', {
            save: (usernameLabel, username) => { return 'xxx' }
        });
    });

    it('should be a function', () => {
       expect(signIn()).toBeA('function')
    });

    describe('Signing in is successful', () => {

        let fetch;
        beforeEach(() => {
            fetch = SignIn.__Rewire__('fetch', function(){
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
                expect(cookie).toHaveBeenCalled('username', user.username)
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

    describe('Signing in is unsuccessful', () => {

        let fetch;
        beforeEach(() => {
            fetch = SignIn.__Rewire__('fetch', function(){
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