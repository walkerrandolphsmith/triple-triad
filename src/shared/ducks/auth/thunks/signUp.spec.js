import expect from 'expect';
import { signUp, __RewireAPI__ } from './signUp';

describe('src/shared/reducers/auth/thunks/signUp', () => {
    let dispatch;
    let user;
    beforeEach(() => {
        dispatch = expect.createSpy();
        user = {
            username: 'walkerrandolphsmith',
            password: 'password',
            confirmPassword: 'password',
            email: 'email'
        };

        __RewireAPI__.__Rewire__('isValidUsername', () => true);
        __RewireAPI__.__Rewire__('isValidPassword', () => true);
        __RewireAPI__.__Rewire__('passwordsMatch', () => true);
        __RewireAPI__.__Rewire__('isValidEmail', () => true);
        __RewireAPI__.__Rewire__('signUpRequest', () => 1);
        __RewireAPI__.__Rewire__('setFormError', () => 2);
        __RewireAPI__.__Rewire__('signUpSuccess', () => 3);
        __RewireAPI__.__Rewire__('push', () => 4);
    });

    it('should be a function', () => {
        expect(signUp()).toBeA('function');
    });
});