import expect from 'expect';
import { sendPasswordReset, __RewireAPI__ } from './sendPasswordReset';

describe('src/shared/reducers/sendPasswordReset/thunks/sendPasswordReset', () => {
    let dispatch;
    let email;
    beforeEach(() => {
        dispatch = expect.createSpy();
        email = 'walkerrandolphsmith@gmail.com';
        __RewireAPI__.__Rewire__('sendPasswordResetRequest', () => 1);
        __RewireAPI__.__Rewire__('sendPasswordResetSuccess', () => 2);
        __RewireAPI__.__Rewire__('sendPasswordResetFailure', () => 3);
        __RewireAPI__.__Rewire__('sendPasswordResetClear', () => 4);
        __RewireAPI__.__Rewire__('setFormError', () => 5);
    });

    it('should be a function', () => {
        expect(sendPasswordReset()).toBeA('function');
    });
});