import expect from 'expect';
import ResetPassword from './resetPassword';
import { resetPassword, __RewireAPI__ as resetPasswordRewireAPI } from './resetPassword';

describe('RESEND PASSWORD async action creator', () => {

    let dispatch;
    beforeEach(() => {
        dispatch = expect.createSpy();
    });

    it('should be a function', () => {
        expect(resetPassword()).toBeA('function')
    });

});