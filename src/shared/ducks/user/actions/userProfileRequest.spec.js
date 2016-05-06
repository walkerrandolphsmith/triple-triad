import expect from 'expect';
import { USER_PROFILE_REQUEST, userProfileRequest } from './../index';

describe('src/shared/reducers/user/actions/userProfileRequest', () => {
    describe('Given USER_PROFILE action type', () => {
        describe('When invoking the requestUserProfile action creator', () => {
            it('should create an action', () => {
                const expectedAction = {
                    type: USER_PROFILE_REQUEST
                };
                expect(userProfileRequest()).toEqual(expectedAction);
            });
        });
    });
});