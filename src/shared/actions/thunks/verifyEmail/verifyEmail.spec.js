import expect from 'expect';
import VerifyEmail from './verifyEmail';
import { verifyEmail, __RewireAPI__ as verifyEmailRewireAPI } from './verifyEmail';

describe('VERIFY EMAIL async action creator', () => {

    let token, dispatch;
    beforeEach(() => {
       token = 'token';
       dispatch = expect.createSpy();

    });

    it('should be a function', () => {
       expect(verifyEmail()).toBeA('function')
    });
});