import expect from 'expect';
import { USER_PROFILE } from './../../../../constants/actionTypes';
import { requestUserProfile } from './requestUserProfile';

describe('src/shared/actions/action-creators/userProfile/requestUserProfile', () => {
    describe('Given USER_PROFILE action type', () => {
        describe('When invoking the requestUserProfile action creator', () => {
            it('should create an action', () => {
                const expectedAction = {
                    type: USER_PROFILE
                };
                expect(requestUserProfile()).toEqual(expectedAction);
            });
        });
    });
});