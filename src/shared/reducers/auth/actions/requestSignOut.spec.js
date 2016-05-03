import expect from 'expect';
import { AUTH_SIGNOUT, requestSignOut } from './../auth';

describe('src/shared/reducers/auth/actions/requestSignOut', () => {
    describe('Given AUTH_SIGNOUT action type', () => {
        describe('When invoking the requestSignOut action creator', () => {
            it('should create an action', () => {
                const expectedAction = {
                    type: AUTH_SIGNOUT
                };
                expect(requestSignOut()).toEqual(expectedAction);
            });
        });
    });
});