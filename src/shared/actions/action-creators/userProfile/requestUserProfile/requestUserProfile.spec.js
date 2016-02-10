import expect from 'expect';
import { USER_PROFILE } from './../../../../constants/actionTypes';
import { requestUserProfile } from './requestUserProfile';

describe('REQUEST USER PROFILE', () => {

    it('should be a function', () => {
        expect(requestUserProfile).toBeA('function');
    });

    it('should create an action to initiate fetching user profile data', () => {

        const expectedAction = {
            type: USER_PROFILE
        };
        expect(requestUserProfile()).toEqual(expectedAction)
    });

});