import expect from 'expect';
import { AUTH_SIGNOUT } from './../../../../constants/actionTypes';
import { requestSignOut } from './requestSignOut';

describe('src/shared/actions/action-creators/signout/requestSignOut', () => {
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