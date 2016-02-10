import expect from 'expect';
import ResendVerificationEmail from './resendVerificationEmail';
import { resendVerificationEmail, __RewireAPI__ as resendVerificationEmailRewireAPI } from './resendVerificationEmail';

describe('RESEND EMAIL VERIFICATION async action creator', () => {

    let dispatch, id;
    beforeEach(() => {
       dispatch = expect.createSpy();
        id = 100;

        ResendVerificationEmail.__Rewire__('requestResendEmailVerification', function(){
            return 1;
        });

        ResendVerificationEmail.__Rewire__('receiveResendEmailVerification', function(){
            return 2;
        });

        ResendVerificationEmail.__Rewire__('failResendEmailVerification', function(){
            return 3;
        });

        ResendVerificationEmail.__Rewire__('clearEmailVerificationState', function(){
            return 4;
        });
    });

    it('should be a function', () => {
       expect(resendVerificationEmail()).toBeA('function')
    });

});