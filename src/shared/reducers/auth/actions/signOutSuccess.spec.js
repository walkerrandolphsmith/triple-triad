import expect from 'expect';
import { AUTH_SIGNOUT_SUCCESS, signOutSuccess } from './../index';

describe('src/shared/reducers/auth/actions/receiveSignOut', () => {
    describe('Given AUTH_SIGNOUT_SUCCESS action type', () => {
        describe('When invoking the receiveSignOut action creator', () => {
            it('should create an action', () => {
                const expectedAction = {
                    type: AUTH_SIGNOUT_SUCCESS
                };
                expect(signOutSuccess()).toEqual(expectedAction);
            });
        });
    });
});