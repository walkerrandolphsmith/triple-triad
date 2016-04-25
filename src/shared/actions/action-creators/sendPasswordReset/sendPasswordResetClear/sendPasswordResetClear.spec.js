import expect from 'expect';
import { SEND_PASSWORD_RESET_CLEAR } from './../../../../constants/actionTypes';
import { sendPasswordResetClear } from './sendPasswordResetClear';

describe('src/shared/actions/action-creators/sendPasswordReset/sendPasswordResetClear', () => {
    describe('Given SEND_PASSWORD_RESET_CLEAR action type', () => {
        describe('When invoking the sendPasswordResetClear action creator', () => {
            it('should create an action', () => {
                const expectedAction = {
                    type: SEND_PASSWORD_RESET_CLEAR
                };
                expect(sendPasswordResetClear()).toEqual(expectedAction);
            });
        });
    });
});