import expect from 'expect';
import ResendEmailVerification from './resendEmailVerification';
import { resendEmailVerification, __RewireAPI__ as resendEmailVerificationRewireAPI } from './resendEmailVerification';

describe('RESEND EMAIL VERIFICATION async action creator', () => {

    let dispatch, id;
    beforeEach(() => {
       dispatch = expect.createSpy();
        id = 100;

        ResendEmailVerification.__Rewire__('requestResendEmailVerification', function(){
            return 1;
        });

        ResendEmailVerification.__Rewire__('receiveResendEmailVerification', function(){
            return 2;
        });

        ResendEmailVerification.__Rewire__('failResendEmailVerification', function(){
            return 3;
        });

        ResendEmailVerification.__Rewire__('clearEmailVerificationState', function(){
            return 4;
        });
    });

    it('should be a function', () => {
       expect(resendEmailVerification()).toBeA('function')
    });

});