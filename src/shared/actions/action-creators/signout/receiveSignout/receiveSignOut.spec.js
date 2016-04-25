import expect from 'expect';
import { AUTH_SIGNOUT_SUCCESS } from './../../../../constants/actionTypes';
import { receiveSignOut } from './receiveSignOut';

describe('src/shared/actions/action-creators/signout/receiveSignOut', () => {
    describe('Given AUTH_SIGNOUT_SUCCESS action type', () => {
        describe('When invoking the receiveSignOut action creator', () => {
            it('should create an action', () => {
                const expectedAction = {
                    type: AUTH_SIGNOUT_SUCCESS
                };
                expect(receiveSignOut()).toEqual(expectedAction);
            });
        });
    });
});