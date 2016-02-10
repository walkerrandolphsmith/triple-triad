import expect from 'expect';
import GetUserProfile from './getUserProfile';
import { getUserProfile, __RewireAPI__ as getUserProfileRewireAPI } from './getUserProfile';

describe('Get User Profile async action creator', () => {

    let dispatch, id;
    beforeEach(() => {
       dispatch = expect.createSpy();
        id = 100
    });

    it('should be a function', () => {
       expect(getUserProfile()).toBeA('function')
    });
});