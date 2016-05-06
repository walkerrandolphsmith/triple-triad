import expect from 'expect';
import { AUTH_SIGNOUT, signOutRequest } from './../index';

describe('src/shared/reducers/auth/actions/requestSignOut', () => {
    describe('Given AUTH_SIGNOUT action type', () => {
        describe('When invoking the requestSignOut action creator', () => {
            it('should create an action', () => {
                const expectedAction = {
                    type: AUTH_SIGNOUT
                };
                expect(signOutRequest()).toEqual(expectedAction);
            });
        });
    });
});