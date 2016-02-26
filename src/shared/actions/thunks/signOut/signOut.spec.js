import expect from 'expect';
import SignOut from './signOut';
import { signOut, __RewireAPI__ as signOutRewireAPI } from './signOut';
import request from 'superagent';
import mocker from 'superagent-mocker';

describe('SIGN_OUT async action creator', () => {

    let mock, dispatch;
    beforeEach(() => {
       mock = mocker(request);
       dispatch = expect.createSpy();

        SignOut.__Rewire__('requestSignOut', () => {
            return 1;
        });

        SignOut.__Rewire__('receiveSignOut', () => {
            return 2;
        });

        SignOut.__Rewire__('pushPath', () => {
            return 3;
        });
    });

    afterEach(() => {
        mock.clearRoutes();
    });

    it('should be a function', () => {
       expect(signOut()).toBeA('function')
    });

    describe('Signing out is successful', () => {
        beforeEach(() => {
            mock.get('/api/sign_out', (req) => ({
                status: 200
            }));
        });

        it('should dispatch requestSignOut and receiveSignOut action', done => {
            signOut()(dispatch);
            expect(dispatch).toHaveBeenCalledWith(1);
            setTimeout(() => {
                expect(dispatch).toHaveBeenCalledWith(2);
                expect(dispatch).toHaveBeenCalledWith(3);
                done();
            }, 0);
        });
    });

    describe('Signing out is unsuccessful', () => {
        beforeEach(() => {
            mock.get('/api/sign_out', (req) => ({
                status: 500
            }));
        });

        it('should dispatch requestSignOut action', () => {
            signOut()(dispatch);
            expect(dispatch).toHaveBeenCalledWith(1);
        });
    });
});