import expect from 'expect';
import SignOut from './signOut';
import { signOut, __RewireAPI__ as signOutRewireAPI } from './signOut';

describe('SIGN_OUT async action creator', () => {

    let dispatch, get;
    beforeEach(() => {
       dispatch = expect.createSpy();
       SignOut.__Rewire__('requestSignOut', () => 1);
       SignOut.__Rewire__('receiveSignOut', () => 2);
       SignOut.__Rewire__('pushPath', () => 3);
    });

    it('should be a function', () => {
       expect(signOut()).toBeA('function')
    });

    describe('Given a request is made to sign out', () => {

        beforeEach(() => {
            let request = SignOut.__Rewire__('request', {
                get: function(endpoint) { return this; },
                end: (fn) => {
                    fn(null, { status: 200 });
                }
            });

            get = expect.spyOn(request, 'get').andCallThrough();

            signOut()(dispatch);
        });

        it('should request to /api/sign_out endpoint', () => {
            expect(get).toHaveBeenCalledWith('/api/sign_out');
        });
    });

    describe('Signing out is successful', () => {
        beforeEach(() => {
            let request = SignOut.__Rewire__('request', {
                get: function(endpoint) { return this; },
                send: function(data) { return this },
                set: function(key, value) { return this },
                end: (fn) => {
                    fn(null, { status: 200 });
                }
            });
            signOut()(dispatch);
        });

        it('should dispatch requestSignOut action', () => {
            expect(dispatch).toHaveBeenCalledWith(1);
        });

        it('should dispatch receiveSignOut action', () => {
            expect(dispatch).toHaveBeenCalledWith(2);
        });

        it('should dispatch push path action', () => {
            expect(dispatch).toHaveBeenCalledWith(3);
        });
    });

    describe('Signing out is unsuccessful', () => {
        beforeEach(() => {
            let request = SignOut.__Rewire__('request', {
                get: function(endpoint) { return this; },
                send: function(data) { return this },
                set: function(key, value) { return this },
                end: (fn) => {
                    fn(null, { status: 500 });
                }
            });
            signOut()(dispatch);
        });

        it('should dispatch requestSignOut action', () => {
            expect(dispatch).toHaveBeenCalledWith(1);
        });
    });
});