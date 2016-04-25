import expect from 'expect';
import { PASSWORD_RESET_FAILED } from './../../../../constants/actionTypes';
import { passwordResetFailed } from './passwordResetFailed';

describe('src/shared/actions/action-creators/passwordReset/passwordResetFailed', () => {
    describe('Given PASSWORD_RESET_FAILURE action type', () => {
        describe('When invoking the passwordResetFailed action creator', () => {
            it('should create an action', () => {
                const expectedAction = {
                    type: PASSWORD_RESET_FAILED
                };
                expect(passwordResetFailed()).toEqual(expectedAction);
            });
        });
    });
});