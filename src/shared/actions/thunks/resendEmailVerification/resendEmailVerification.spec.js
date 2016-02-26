import expect from 'expect';
import ResendEmailVerification from './resendEmailVerification';
import { resendEmailVerification, __RewireAPI__ as resendEmailVerificationRewireAPI } from './resendEmailVerification';

describe('RESEND EMAIL VERIFICATION async action creator', () => {

    let dispatch, id;
    beforeEach(() => {
       dispatch = expect.createSpy();
        id = 100;

        ResendEmailVerification.__Rewire__('requestResendEmailVerification', () => {
            return 1;
        });

        ResendEmailVerification.__Rewire__('receiveResendEmailVerification', () => {
            return 2;
        });

        ResendEmailVerification.__Rewire__('failResendEmailVerification', () => {
            return 3;
        });

        ResendEmailVerification.__Rewire__('clearEmailVerificationState', () => {
            return 4;
        });
    });

    it('should be a function', () => {
       expect(resendEmailVerification()).toBeA('function')
    });

});