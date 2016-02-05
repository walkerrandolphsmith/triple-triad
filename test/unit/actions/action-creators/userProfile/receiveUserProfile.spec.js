import expect from 'expect';
import { USER_PROFILE_SUCCESS } from './../../../../../src/shared/constants/actionTypes';
import { receiveUserProfile } from './../../../../../src/shared/actions/action-creators';

describe('RECEIVE USER PROFILE', () => {

    let user;
    beforeEach(() => {
        user = {
            name: "walker",
            id: 12
        };
    });

    it('should be a function', () => {
        expect(receiveUserProfile).toBeA('function');
    });

    it('should create an action to initiate fetching user profile data was successful', () => {

        const expectedAction = {
            type: USER_PROFILE_SUCCESS,
            payload: {
                user: user
            }
        };
        expect(receiveUserProfile(user)).toEqual(expectedAction)
    });

});