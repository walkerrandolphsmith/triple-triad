import expect from 'expect';
import { SEND_PASSWORD_RESET } from './../../../../constants/actionTypes';
import { sendPasswordResetRequest } from './sendPasswordResetRequest';

describe('src/shared/actions/action-creators/sendPasswordReset/sendPasswordResetRequest', () => {
    describe('Given SEND_PASSWORD_RESET action type', () => {
        describe('When invoking the sendPasswordResetRequest action creator', () => {
            it('should create an action', () => {
                const expectedAction = {
                    type: SEND_PASSWORD_RESET
                };
                expect(sendPasswordResetRequest()).toEqual(expectedAction);
            });
        });
    });
});