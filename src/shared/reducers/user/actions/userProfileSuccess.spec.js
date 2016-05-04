import expect from 'expect';
import { USER_PROFILE_SUCCESS, userProfileSuccess } from './../user';

describe('src/shared/reducers/users/actions/userProfileSuccess', () => {
    describe('Given USER_PROFILE_SUCCESS action type', () => {
        let user;
        let expectedAction;
        beforeEach(() => {
            user = {
                name: 'walker',
                id: 20
            };
            expectedAction = {
                type: USER_PROFILE_SUCCESS,
                payload: {
                    user: user
                }
            };
        });

        describe('When invoking the receiveUserProfile action creator', () => {
            it('should create an action', () => {
                expect(userProfileSuccess(user)).toEqual(expectedAction);
            });

            it('should set its first parameter to the payload user field', () => {
                expect(userProfileSuccess(user).payload.user).toEqual(user);
            });
        });
    });
});