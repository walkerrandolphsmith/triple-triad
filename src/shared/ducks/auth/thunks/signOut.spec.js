import expect from 'expect';
import { signOut, __RewireAPI__ } from './signOut';

describe('src/shared/reducers/auth/thunks/signOut', () => {
    let dispatch;
    beforeEach(() => {
        dispatch = expect.createSpy();
        __RewireAPI__.__Rewire__('signOutRequest', () => 1);
        __RewireAPI__.__Rewire__('signOutSuccess', () => 2);
        __RewireAPI__.__Rewire__('push', () => 3);
    });

    it('should be a function', () => {
        expect(signOut()).toBeA('function');
    });
});