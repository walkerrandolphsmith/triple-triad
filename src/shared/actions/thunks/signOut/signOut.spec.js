import expect from 'expect';
import SignOut from './signOut';
import { signOut, __RewireAPI__ as signOutRewireAPI } from './signOut';

describe('SIGN_OUT async action creator', () => {

    let dispatch, userNameLabel;
    beforeEach(() => {
       userNameLabel = 'username';
       dispatch = expect.createSpy();

        SignOut.__Rewire__('requestSignOut', function(){
            return 1;
        });

        SignOut.__Rewire__('receiveSignOut', function(){
            return 2;
        });

        SignOut.__Rewire__('pushPath', function(){
            return '/';
        });
    });

    it('should be a function', () => {
       expect(signOut()).toBeA('function')
    });

    describe('Signing out is successful', () => {

        let fetch;
        beforeEach(() => {
            fetch = SignOut.__Rewire__('fetch', function(){
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
                expect(cookie).toHaveBeenCalled(userNameLabel)
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
            fetch = SignOut.__Rewire__('fetch', function(){
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