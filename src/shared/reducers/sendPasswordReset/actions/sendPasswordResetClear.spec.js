import expect from 'expect';
import { SEND_PASSWORD_RESET_CLEAR, sendPasswordResetClear } from './../index';

describe('src/shared/reducers/sendPasswordReset/actions/sendPasswordResetClear', () => {
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