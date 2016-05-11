import expect from 'expect';
import { signIn, __RewireAPI__ } from './signIn';

describe('src/shared/reducers/auth/thunks/signIn', () => {
    let dispatch;
    let user;
    beforeEach(() => {
        dispatch = expect.createSpy();
        user = {
            username: 'walker',
            password: 'password'
        };

        __RewireAPI__.__Rewire__('isValidUsername', () => true);
        __RewireAPI__.__Rewire__('isValidPassword', () => true);
        __RewireAPI__.__Rewire__('signInRequest', () => 1);
        __RewireAPI__.__Rewire__('setFormError', () => 2);
        __RewireAPI__.__Rewire__('signInSuccess', () => 3);
        __RewireAPI__.__Rewire__('push', () => 4);
    });

    it('should be a function', () => {
        expect(signIn()).toBeA('function');
    });
});