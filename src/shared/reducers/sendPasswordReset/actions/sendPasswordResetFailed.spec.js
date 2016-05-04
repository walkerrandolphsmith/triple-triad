import expect from 'expect';
import { SEND_PASSWORD_RESET_FAILED, sendPasswordResetFailure } from './../index';

describe('src/shared/reducers/sendPasswordReset/actions/sendPasswordResetFailed', () => {
    describe('Given SEND_PASSWORD_RESET_FAILED action type', () => {
        describe('When invoking the sendPasswordResetFailed action creator', () => {
            it('should create an action', () => {
                const expectedAction = {
                    type: SEND_PASSWORD_RESET_FAILED
                };
                expect(sendPasswordResetFailure()).toEqual(expectedAction);
            });
        });
    });
});