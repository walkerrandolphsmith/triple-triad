import expect from 'expect';
import SendPasswordReset from './../sendPasswordReset/sendPasswordReset';
import { sendPasswordReset, __RewireAPI__ as sendPasswordResetRewireAPI } from './sendPasswordReset';

describe('SEND PASSWORD RESET async action creator', () => {

    let dispatch, email;
    beforeEach(() => {
        dispatch = expect.createSpy();
        email = 'walkerrandolphsmith@gmail.com';
    });

    it('should be a function', () => {
        expect(sendPasswordReset()).toBeA('function')
    });

});