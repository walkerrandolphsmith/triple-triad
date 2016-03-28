import expect from 'expect';
import { signOut, __RewireAPI__ } from './signOut';

describe('SIGN_OUT async action creator', () => {
    let dispatch;
    let get;
    let request;
    beforeEach(() => {
        dispatch = expect.createSpy();
        __RewireAPI__.__Rewire__('requestSignOut', () => 1);
        __RewireAPI__.__Rewire__('receiveSignOut', () => 2);
        __RewireAPI__.__Rewire__('push', () => 3);

        request = __RewireAPI__.__Rewire__('request', {
            get: function() {
                return this;
            }
        });
        get = expect.spyOn(request, 'get').andCallThrough();
    });

    it('should be a function', () => {
        expect(signOut()).toBeA('function');
    });

    describe('Given a request is made to sign out', () => {
        beforeEach(() => {
            request.end = fn => {
                fn(null, { status: 200 });
            };
            signOut()(dispatch);
        });

        it('should request to /api/signOut endpoint', () => {
            expect(get).toHaveBeenCalledWith('/api/signOut');
        });
    });

    describe('Signing out is successful', () => {
        beforeEach(() => {
            request.end = fn => {
                fn(null, { status: 200 });
            };
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
            request.end = fn => {
                fn(null, { status: 500 });
            };
            signOut()(dispatch);
        });

        it('should dispatch requestSignOut action', () => {
            expect(dispatch).toHaveBeenCalledWith(1);
        });
    });
});