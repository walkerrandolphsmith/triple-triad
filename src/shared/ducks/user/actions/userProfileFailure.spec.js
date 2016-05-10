import expect from 'expect';
import { USER_PROFILE_FAILED, userProfileFailure } from './../index';

describe('src/shared/reducers/user/actions/userProfileFailure', () => {
    describe('Given USER_PROFILE_FAILED action type', () => {
        describe('When invoking the userProfileFailure action creator', () => {
            it('should create an action', () => {
                const expectedAction = {
                    type: USER_PROFILE_FAILED
                };
                expect(userProfileFailure()).toEqual(expectedAction);
            });
        });
    });
});