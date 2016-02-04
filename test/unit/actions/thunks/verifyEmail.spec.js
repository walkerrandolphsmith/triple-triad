import expect from 'expect';
import VerifyEmail from './../../../../src/shared/actions/thunks/verifyEmail';
import { verifyEmail, __RewireAPI__ as verifyEmailRewireAPI } from './../../../../src/shared/actions/thunks/verifyEmail';

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