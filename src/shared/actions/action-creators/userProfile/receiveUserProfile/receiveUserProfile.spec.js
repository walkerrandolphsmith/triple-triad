import expect from 'expect';
import { USER_PROFILE_SUCCESS } from './../../../../constants/actionTypes';
import { receiveUserProfile } from './receiveUserProfile';

describe('src/shared/actions/action-creators/userProfile/receiveUserProfile', () => {
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
                expect(receiveUserProfile(user)).toEqual(expectedAction);
            });

            it('should set its first parameter to the payload user field', () => {
                expect(receiveUserProfile(user).payload.user).toEqual(user);
            });
        });
    });
});