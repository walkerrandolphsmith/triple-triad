import expect from 'expect';
import { SEND_PASSWORD_RESET_FAILED } from './../../../../constants/actionTypes';
import { sendPasswordResetFailed } from './sendPasswordResetFailed';

describe('src/shared/actions/action-creators/sendPasswordReset/sendPasswordResetFailed', () => {
    describe('Given SEND_PASSWORD_RESET_FAILED action type', () => {
        describe('When invoking the sendPasswordResetFailed action creator', () => {
            it('should create an action', () => {
                const expectedAction = {
                    type: SEND_PASSWORD_RESET_FAILED
                };
                expect(sendPasswordResetFailed()).toEqual(expectedAction);
            });
        });
    });
});